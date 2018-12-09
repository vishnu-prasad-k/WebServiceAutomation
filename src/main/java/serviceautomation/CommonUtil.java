package serviceautomation;

import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.PathNotFoundException;
import net.minidev.json.JSONArray;
import org.apache.commons.codec.binary.Base64;

import java.io.File;
import java.math.BigDecimal;
import java.util.*;
import java.util.logging.Logger;

import static serviceautomation.RestClient.getOutputResponse;

/**
 * Created by vishnuprasadk on 28/12/17.
 * This class contains common methods which can be used to parse the json response
 */
public class CommonUtil {

    private static final Logger logger = Logger.getLogger(CommonUtil.class.getName());

    public static ArrayList<String> validateFieldAndData(List<String> fields) throws Exception {
        ArrayList<String> notFound = new ArrayList<>();
        ArrayList<String> emptyResponse = new ArrayList<>();
        for (String field : fields) {
            try {
                String value = getJsonPathString(field);
                logger.info(field + "=" + value);
                if (Objects.equals(value, "null")) {
                    emptyResponse.add(field);
                } else if (value.isEmpty()) {
                    emptyResponse.add(field);
                }
            } catch (PathNotFoundException e) {
                notFound.add(field);
                logger.info("Failed to find the field " + field);
            } catch (Exception e) {
                notFound.add(field);
                logger.info("Failed to validate the field " + field);
            }
        }
        if (emptyResponse.size() > 0) {
            logger.info("The following fields were having empty response\n" + emptyResponse);
        }
        return notFound;
    }

    public static ArrayList<String> validateFieldAndCheckDataNotNull(List<String> fields) throws Exception {
        ArrayList<String> emptyResponse = new ArrayList<>();
        for (String field : fields) {
            try {
                String value = getJsonPathString(field);
                logger.info(field + "=" + value);
                if (!Objects.equals(value, "NULL")) {
                    if (value.equalsIgnoreCase("null")) {
                        emptyResponse.add(field);
                    }
                }
            } catch (PathNotFoundException e) {
                emptyResponse.add(field);
                logger.info("Failed to find the field " + field);
            } catch (Exception e) {
                emptyResponse.add(field);
                logger.info("Failed to validate the filed " + field);
            }
        }
        return emptyResponse;
    }

    //Returns the values in a string for the json path given
    public static String getJsonPathString(String jsonPath) throws Exception {
        Object jsonPathResult = JsonPath.read(getOutputResponse(), jsonPath);
        if (jsonPathResult == null) { //Checks if the json value returned is null. Happens when object is having null response
            return "null";
        } else if (jsonPathResult instanceof List && ((List<?>) jsonPathResult).isEmpty()) {
            //Checks if the json value returned is a list and if its empty.
            //Happens when the object is having empty response.
            throw new PathNotFoundException();
        } else if (jsonPathResult instanceof List && ((List) jsonPathResult).size() > 0) {
            //Checks if the json value returned is a list and if it is NOT empty.
            //Happens when the object is part of a json array
            String listString = "";
            int i = 0;
            while (i < ((List) jsonPathResult).size()) {
                listString = listString + conversion(((JSONArray) jsonPathResult).get(i));
                if (((JSONArray) jsonPathResult).get(i) != null) {
                    if (((JSONArray) jsonPathResult).get(i).toString().equalsIgnoreCase("[]")) {
                        return "null";
                    }
                }
                i++;
            }
            return listString;
        } else {
            return conversion(jsonPathResult);
        }
    }

    //Returns the values in a list for the json path given.
    //To be used when the json path returns more than one vale
    public static List<String> getJsonPathList(String jsonPath) throws Exception {
        Object jsonPathResult = JsonPath.read(getOutputResponse(), jsonPath); //Reads the json response saved from the previous service call
        return getJsonPathValuesInList(jsonPathResult);
    }

    public static List<String> getJsonPathList(String jsonResponse, String jsonPath) throws Exception {
        Object jsonPathResult = JsonPath.read(jsonResponse, jsonPath); //Uses the json response passed form the method call
        return getJsonPathValuesInList(jsonPathResult);
    }

    private static List<String> getJsonPathValuesInList(Object jsonPathResult) throws Exception {
        List<String> listString = new ArrayList<>();
        if (jsonPathResult == null) {
            //Checks if the json value returned is null. Happens when object is having null response
            listString.clear();
            return listString;
        } else if (jsonPathResult instanceof List && ((List<?>) jsonPathResult).isEmpty()) {
            //Checks if the json value returned is a list and if its empty.
            //Happens when the object is having empty response.
            throw new PathNotFoundException();
        } else if (jsonPathResult instanceof List && ((List) jsonPathResult).size() > 0) {
            //Checks if the json value returned is a list and if it is NOT empty.
            //Happens when the object is part of a json array
            int i = 0;
            while (i < ((List) jsonPathResult).size()) {
                listString.add(i, conversion(((JSONArray) jsonPathResult).get(i)));
                i++;
            }
            return listString;
        } else {
            listString.clear();
            listString.add(0, conversion(jsonPathResult));
            return listString;
        }
    }

    public static String conversion(Object object) {
        if (object instanceof Double) {
            return String.valueOf(((Double) object).doubleValue());
        } else if (object instanceof String || object instanceof BigDecimal || object instanceof LinkedHashMap) {
            return object.toString();
        } else if (object instanceof Integer) {
            return String.valueOf(((Integer) object).intValue());
        } else if (object == null) {
            return "null";
        } else {
            return object.toString();
        }
    }

    static String base64encode(String input) {
        byte[] bytesEncoded = Base64.encodeBase64(input.getBytes());
        logger.info("Encoded value is " + new String(bytesEncoded));
        return new String(bytesEncoded);
    }

    //Below method deletes the entire directory and returns true or false based on its presence
    private static boolean deleteDirectory(File path) {
        if (path.exists()) {
            File[] files = path.listFiles();
            if (files != null) {
                for (File file : files) {
                    if (file.isDirectory()) {
                        deleteDirectory(file);
                    } else {
                        file.delete();
                    }
                }
            }
        }
        return (path.delete());
    }

    //method to compare 2 list of values
    public static boolean compareLists(List<String> listValues1, List<String> listValues2) {
        if(listValues1 == null || listValues2 == null || (listValues1.size()!=listValues2.size())) {
            return false;
        } else {
            return  validateLists(listValues1, listValues2);
        }
    }


    //Below method compare two lists and returns true or false after comparing them
    private static boolean validateLists(List<String> list1, List<String> list2) {
        list1 = new ArrayList<>(list1);
        list2 = new ArrayList<>(list2);

        Collections.sort(list1);
        Collections.sort(list2);

        return list1.equals(list2);
    }

}
