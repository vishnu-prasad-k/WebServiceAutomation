package serviceautomation.util;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamReader;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by vishnuprasadk on 12/11/17.
 * This parser class reads the config file with the certificate details
 * The config file used here is the service_endpoints_certs.xml, stored under the resources folder
 */
public class ServerInfoXmlParser {

    private static final String HOST = "host";
    private static final String NAME = "name";
    private static final String VALUE = "value";
    private static final String TRUST_STORE = "trustStore";
    private static final String TRUST_STORE_PASSWORD = "trustStorePassword";
    private static final String KEY_STORE = "keyStore";
    private static final String KEY_STORE_PASSWORD = "keyStorePassword";

    private static final String CONFIG_FILE = "service_endpoints_certs.xml";

    private static final Map<String, ServerInfoBean> hosts = new HashMap<>();

    private static final Logger logger = Logger.getLogger(ServerInfoXmlParser.class.getName());

    public ServerInfoXmlParser() {

    }

    static {
        parse();
    }

    public static void parse() {
        InputStream inputStream = null;
        XMLStreamReader reader = null;
        ServerInfoBean serverInfoBean = null;
        try {
            inputStream = ServerInfoXmlParser.class.getClassLoader().getResourceAsStream(CONFIG_FILE);
            reader = XMLInputFactory.newInstance().createXMLStreamReader(inputStream);
            while (reader.hasNext()) {
                if (reader.getEventType() == XMLStreamConstants.START_ELEMENT && reader.getLocalName().equalsIgnoreCase(HOST)) {
                    serverInfoBean = new ServerInfoBean();
                    serverInfoBean.setEndpointUrl(reader.getAttributeValue(null, VALUE));
                    serverInfoBean.setTrustStore(reader.getAttributeValue(null, TRUST_STORE));
                    serverInfoBean.setTrustStorePassword(reader.getAttributeValue(null, TRUST_STORE_PASSWORD));
                    serverInfoBean.setKeyStore(reader.getAttributeValue(null, KEY_STORE));
                    serverInfoBean.setKeyStorePassword(reader.getAttributeValue(null, KEY_STORE_PASSWORD));
                    hosts.put(reader.getAttributeValue(null, NAME), serverInfoBean);
                }
                reader.next();
            }
        } catch (Exception e) {
            logger.log(Level.FINE, "Exception occured in ServerInfoXmlParser{0}", e.getMessage());
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
                if (inputStream != null) {
                    inputStream.close();
                }
            } catch (Exception e) {
                logger.log(Level.FINE, "Exception occured in ServerInfoXmlParser{0}", e.getMessage());
            }
        }
    }

    public static ServerInfoBean getServerDetails(String name) {
        return hosts.get(name);
    }

}
