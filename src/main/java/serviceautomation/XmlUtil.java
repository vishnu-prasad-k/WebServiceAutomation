package serviceautomation;

import net.sf.saxon.TransformerFactoryImpl;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import java.io.ByteArrayInputStream;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

/**
 * Created by v.prasad.kandangath on 4/1/2017.
 */
public class XmlUtil {

    //do change the path as per your workspace
    private static String xslt_path = "src/test/resources/config/";

    public static String convertJsonToXML(String jsonString) throws Exception {
        String converted = null;
        try {
            String xml = null;
            if (jsonString.startsWith("[")) {
                JSONArray json = new JSONArray(jsonString);
                xml = XML.toString(json);
            } else if (jsonString.startsWith("{")) {
                JSONObject json = new JSONObject(jsonString);
                xml = XML.toString(json);
            }

            if (xml != null) {
                converted = "<?xml version=\"1.0\" encoding =\"UTF-8\"?><Response>" + xml + "</Response>";
            }
            return converted;
        } catch (Exception e) {
            throw e;
        }
    }

    public static Map<String, ServiceResponse> populateToMap(String plainText, boolean exactMatchRequired) {
        Map<String, ServiceResponse> map = new HashMap<String, ServiceResponse>();
        String[] records = plainText.split("\n");
        for (int i = 0; i < records.length; i++) {
            Map<String, String> individualMap = new TreeMap<String, String>();
            String[] elements = records[i].split("\\|");

            for (int j = 0; j < elements.length; j++) {
                String[] keyValue = elements[j].split("=");
                if (keyValue.length >= 1) {
                    if (keyValue.length == 2) {
                        individualMap.put(keyValue[0], keyValue[1].trim());
                    } else if (keyValue.length == 1) {
                        individualMap.put(keyValue[0], "");
                    }
                }
            }
            ServiceResponse response = new ServiceResponse();
            response.setMap(individualMap);
            response.setExactMatchRequired(exactMatchRequired);
            map.put(response.getPk(), response);
        }
        return map;
    }

    public static String xsltConversion(String xsltFileName, String inputXml) throws Exception {
        StringWriter writer = new StringWriter();
        StreamResult result = new StreamResult(writer);
        String xsltOutput = null;
        try {
            TransformerFactory tf = TransformerFactoryImpl.newInstance("net.sf.saxon.TransformerFactoryImpl", null);
            Transformer transformer = tf.newTransformer(new StreamSource(xslt_path + xsltFileName));
            if (inputXml != null) {
                transformer.transform(new StreamSource(new ByteArrayInputStream(inputXml.getBytes())), result);
                StringBuffer sb = writer.getBuffer();
                xsltOutput = sb.toString();
            }
        } catch (Exception e) {
            throw e;
        }
        return xsltOutput;
    }

    public static Map<String, ServiceResponse> parseResponse(String response, String xsltFileName, boolean exactMatchRequired) throws Exception {
        String jsonValue = response;
        String converted = XmlUtil.convertJsonToXML(jsonValue);
        String xsltOutput = XmlUtil.xsltConversion(xsltFileName, converted);
        Map<String, ServiceResponse> map = new HashMap<String, ServiceResponse>();
        if (xsltOutput != null && !xsltOutput.equalsIgnoreCase("")) {
            map = XmlUtil.populateToMap(xsltOutput, exactMatchRequired);
        }
        return map;
    }

}
