package serviceautomation.compare;

import com.jayway.jsonpath.JsonPathException;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Assert;
import serviceautomation.CommonUtil;
import serviceautomation.DatabaseConnector;
import serviceautomation.util.CommonModel;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

import static serviceautomation.CommonUtil.getJsonPathList;
import static serviceautomation.DatabaseConnector.getResultSet;
import static serviceautomation.RestClient.getOutputResponse;

/**
 * Created by vishnuprasadk on 28/12/17.
 * Contains method to compare the values returned by the web service response against the result set returned by the SQL query
 */
public class DataBaseVsWebService {

    private String finalOutput = "";
    private String webServiceResponseFieldName;
    private String dataBaseFieldName;
    private String inputType;
    private String webServiceFormattedValue;
    private String dataBaseFormattedValue;
    private static String errorOutput;
    private JSONArray getArray = null;
    private static Boolean webServiceResponseFieldMissing;

    private Formatter formatter = new Formatter();

    private static final Logger logger = Logger.getLogger(DataBaseVsWebService.class.getName());

    //Use the below method when you want to perform the validations by navigating into the json response with the array identifiers
    //Multiple array identifiers can be passed by separating them with commas (,)
    public void compareDbVsWs(String arrayIdentifier, String jsonKey, String resultSetKey, List<CommonModel> fieldNames) throws Exception {
        JSONObject jsonObject = new JSONObject();
        webServiceResponseFieldMissing = false;
        ResultSet resultSet = getResultSet();
        String firstChar = String.valueOf(getOutputResponse().charAt(0));

        if (firstChar.equalsIgnoreCase("[")) {
            getArray = new JSONArray(getOutputResponse());
        } else {
            jsonObject = new JSONObject(getOutputResponse());
        }

        List<String> items = Arrays.asList(arrayIdentifier.split("\\s*,\\s*"));
        String arrayIdName;
        int j = 0;

        if (arrayIdentifier.contains(",")) {
            JSONArray tempArray = null;
            JSONObject tempObject;
            while (j < items.size()) {
                arrayIdName = items.get(j);
                if (jsonObject.has(arrayIdName)) {
                    getArray = jsonObject.getJSONArray(arrayIdName);
                } else {
                    int k = 0;
                    while (k < getArray.length()) {
                        tempObject = getArray.getJSONObject(k);
                        if (tempObject.has(arrayIdName)) {
                            if (tempArray == null) {
                                tempArray = tempObject.getJSONArray(arrayIdName);
                            } else {
                                for (int i = 0; i < tempObject.getJSONArray(arrayIdName).length(); i++) {
                                    tempArray.put(tempArray.length(), tempObject.getJSONArray(arrayIdName).getJSONObject(i));
                                }
                            }
                        }
                        k++;
                    }
                    getArray = tempArray;
                }
                j++;
            }
        } else if (arrayIdentifier.length() > 0) {
            try {
                getArray = jsonObject.getJSONArray(arrayIdentifier);
                if (getArray.length() == 0) {
                    Assert.fail("The JSON response returned an empty array\n" + getOutputResponse());
                }
            } catch (Exception e) {
                Assert.fail("The service is not having the array " + arrayIdentifier);
            }
        }

        int i = 0;
        while (resultSet.next()) {
            errorOutput = "";
            JSONObject objects;
            if (getArray == null) {
                objects = jsonObject;
            } else {
                Object tempObject = resultSet.getObject(resultSetKey);
                String databaseValue = CommonUtil.conversion(tempObject);
                objects = fetchCorrectJsonObject(jsonKey, getArray, databaseValue);
            }
            for (CommonModel fields : fieldNames) {
                webServiceResponseFieldName = fields.webServiceResponseField;
                inputType = fields.fieldType;
                dataBaseFieldName = fields.dataBaseField;
                String dbValue = resultSet.getString(dataBaseFieldName);
                if (dbValue == null) {
                    dbValue = "null";
                }
                String serviceValue = "null";
                try {
                    if (!objects.get(webServiceResponseFieldName).equals(null)) {
                        serviceValue = (String) objects.get(webServiceResponseFieldName);
                    }
                } catch (ClassCastException e) {
                    try {
                        serviceValue = String.valueOf(objects.getDouble(webServiceResponseFieldName));
                    } catch (Exception e1) {
                        logger.info("The json response is not having the json field " + webServiceResponseFieldName);
                        webServiceResponseFieldMissing = true;
                        break;
                    }
                } catch (Exception e) {
                    logger.info("The json response is not having the json field " + webServiceResponseFieldName);
                    webServiceResponseFieldMissing = true;
                    break;
                }
                webServiceFormattedValue = formatter.webServiceValueFormatter(inputType, serviceValue);
                dataBaseFormattedValue = formatter.dataBaseValueFormatter(inputType, dbValue);
                compareValues(webServiceFormattedValue, dataBaseFormattedValue);
            }
            if (errorOutput.length() != 0) {
                finalOutput = finalOutput + "\n" + errorOutput + "\n";
            }
            i = i + 1;
        }
        if (finalOutput.length() != 0) {
            Assert.fail("Below values are mismatching\n" + finalOutput);
        } else if (finalOutput.length() == 0 && webServiceResponseFieldMissing) {
            logger.info("The json response is:\n" + getOutputResponse());
            Assert.fail("The web service response was missing one or more fields.");
        }
    }

    //Use the below method to compare the values when the json path is provided as the web service response field name
    //All the json values for the json path provided are stored in a list and compared against the similar list fetched from the DB
    public void compareDbVsWs(List<CommonModel> fieldNames) throws Exception {
        webServiceResponseFieldMissing = false;
        errorOutput = "";
        for (CommonModel fields : fieldNames) {
            webServiceResponseFieldName = fields.webServiceResponseField;
            inputType = fields.fieldType;
            dataBaseFieldName = fields.dataBaseField;
            String databaseValue;
            try {
                List<String> webServiceValues = getJsonPathList(webServiceResponseFieldName);
                for (int j = 0; j < webServiceValues.size(); j++) {
                    webServiceValues.set(j, formatter.webServiceValueFormatter(inputType, webServiceValues.get(j)));
                }
                List<String> databaseValues = new ArrayList<>();
                DatabaseConnector.executeQuery();
                ResultSet resultSet = getResultSet();
                if (resultSet.toString().length() == 0) {
                    Assert.fail("The result set for the query is empty");
                }
                int i = 0;
                while (resultSet.next()) {
                    databaseValue = resultSet.getString(dataBaseFieldName);
                    if (databaseValue == null) {
                        databaseValue = "null";
                    }
                    databaseValues.add(i, formatter.dataBaseValueFormatter(inputType, databaseValue));
                    i++;
                }
                webServiceFormattedValue = webServiceValues.toString();
                dataBaseFormattedValue = databaseValues.toString();
                compareLists(webServiceValues, databaseValues);
            } catch (JsonPathException e) {
                logger.info("The response is not having the json field " + webServiceResponseFieldName);
                webServiceResponseFieldMissing = true;
            }
        }
        if (errorOutput.length() != 0) {
            Assert.fail("Below values are mismatching:\n" + errorOutput);
        } else if (errorOutput.length() == 0 && webServiceResponseFieldMissing) {
            logger.info("The json response is:\n" + getOutputResponse());
            logger.info("The database response is:\n" + getResultSet().toString());
            Assert.fail("The web service response was missing one or more fields");
        }
    }

    //method fetches the json object from the json response which contains the matching values from the data base result set
    private JSONObject fetchCorrectJsonObject(String key, JSONArray getArray, String databaseValue) throws Exception {
        JSONObject jsonObject = null;
        for (int i = 0; i < getArray.length(); i++) {
            Object object = getArray.getJSONObject(i).get(key);
            String jsonValue = CommonUtil.conversion(object);
            if (jsonValue.equals(databaseValue)) {
                jsonObject = getArray.getJSONObject(i);
                break;
            }
        }
        return jsonObject;
    }

    //compare the web service formatted value to the database formatted value
    private void compareValues(String serviceValue, String dbValue) {
        if (!serviceValue.equals(dbValue)) {
            logFailure();
        } else {
            logSuccess();
        }
    }

    //method to compare the list of values from the web service against the data base
    private void compareLists(List<String> webServiceValues, List<String> databaseValues) {
        if (webServiceValues == null && databaseValues == null) {
            logger.info("Both the database and web service results are empty or null");
        } else if (CommonUtil.compareLists(webServiceValues, databaseValues)) {
            logSuccess();
        } else logFailure();
    }

    private void logSuccess() {
        logger.info("Database results are matching with the Service Response:\n\t" + webServiceResponseFieldName + " --> " + webServiceFormattedValue
                + "\n\t" + dataBaseFieldName + " --> " + dataBaseFormattedValue + "\n");
    }

    private void logFailure() {
        errorOutput = errorOutput + webServiceResponseFieldName + " --> Web Service Value: " + webServiceFormattedValue
                + "\n" + dataBaseFieldName + " --> Database Value: " + dataBaseFormattedValue + "\n";
    }
}
