package serviceautomation.compare;

import org.junit.Assert;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by vishnuprasadk on 28/12/17.
 * Class to format the values fetched from the web service response and the database
 */
public class Formatter {

    //Method to format the web service value
    String webServiceValueFormatter(String valueType, String webServiceValue) {
        String formattedValue = "";

        if (webServiceValue.equals("null") || webServiceValue.equals("")) {
            formattedValue = "null";
            return formattedValue;
        }

        switch (valueType.toLowerCase()) {
            case "number":
                try {
                    double temp = Double.parseDouble(webServiceValue);
                    formattedValue = String.format("%.2f", temp);
                } catch (Exception e) {
                    formattedValue = webServiceValue;
                }
                break;
            case "status":
                if (webServiceValue.equalsIgnoreCase("Yes")) {
                    formattedValue = String.valueOf('Y');
                } else if (webServiceValue.equalsIgnoreCase("No")) {
                    formattedValue = String.valueOf('N');
                }
                break;
            case "flag":
                if (webServiceValue.equalsIgnoreCase("false")) {
                    formattedValue = String.valueOf('0');
                } else if (webServiceValue.equalsIgnoreCase("true")) {
                    formattedValue = String.valueOf('1');
                }
                break;
            case "string":
                if (webServiceValue.equalsIgnoreCase("not available")) {
                    formattedValue = "null";
                } else {
                    formattedValue = webServiceValue;
                }
                break;
            case "time":
                formattedValue = webServiceValue;
                break;
            case "date":
                if (webServiceValue.contains("T")) {
                    formattedValue = webServiceValue.substring(0, webServiceValue.indexOf("T"));
                } else {
                    formattedValue = webServiceValue;
                }
                if (formattedValue.indexOf("-") == 2) {
                    try {
                        Date myDate = new SimpleDateFormat("mm-dd-yyyy").parse(formattedValue);
                        formattedValue = new SimpleDateFormat("yyyy-MM-dd").format(myDate);
                    } catch (ParseException e) {
                        e.printStackTrace();
                    }
                }
                break;
            default:
                Assert.fail("The value passed in the type field is not valid.\nExpected values: number, status, flag, string, time, date\nGiven value: " + valueType);
                break;
        }
        return formattedValue;
    }

    //Method to format the data base value
    String dataBaseValueFormatter(String valueType, String databaseValue) {
        String formattedValue = "";
        if (databaseValue.equals("null") || databaseValue.equals("")) {
            formattedValue = "null";
            return formattedValue;
        }

        switch (valueType.toLowerCase()) {
            case "number":
                try {
                    double temp = Double.parseDouble(databaseValue);
                    formattedValue = String.format("%.2f", temp);
                } catch (Exception e) {
                    formattedValue = databaseValue;
                }
                break;
            case "status":
            case "flag":
            case "string":
                formattedValue = databaseValue;
                break;
            case "time":
                formattedValue = databaseValue.substring(11);
                break;
            case "date":
                formattedValue = databaseValue.substring(0, 10);
                break;
            default:
                Assert.fail("The value passed in the type field is not valid.\nExpected values: number, status, flag, string, time, date\nGiven value: " + valueType);
                break;
        }
        return formattedValue;
    }

}
