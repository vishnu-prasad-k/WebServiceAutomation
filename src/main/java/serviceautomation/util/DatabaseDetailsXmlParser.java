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
 * This XML Parser class is used to fetch the database connection details from the config file and store them in the DataBaseBean
 * The config file used is database_details.xml, stored under the resources folder
 */
public class DatabaseDetailsXmlParser {

    private static final Map<String, DataBaseBean> databaseDetails = new HashMap<>();

    private static final String DATABASE = "database";
    private static final String NAME = "name";
    private static final String HOSTNAME = "hostname";
    private static final String USERNAME = "dbusername";
    private static final String PASSWORD = "dbpassword";

    private static final String CONFIG_FILE = "database_details.xml";

    private static final Logger logger = Logger.getLogger(DatabaseDetailsXmlParser.class.getName());

    public DatabaseDetailsXmlParser() {

    }

    static {
        parse();
    }

    public static void parse() {
        InputStream inputStream = null;
        XMLStreamReader reader = null;
        DataBaseBean dataBaseBean = null;
        try {
            inputStream = ServerInfoXmlParser.class.getClassLoader().getResourceAsStream(CONFIG_FILE);
            reader = XMLInputFactory.newInstance().createXMLStreamReader(inputStream);
            while (reader.hasNext()) {
                if (reader.getEventType() == XMLStreamConstants.START_ELEMENT && reader.getLocalName().equalsIgnoreCase(DATABASE)) {
                    dataBaseBean = new DataBaseBean();
                    dataBaseBean.setHostName(reader.getAttributeValue(null, HOSTNAME));
                    dataBaseBean.setUserName(reader.getAttributeValue(null, USERNAME));
                    dataBaseBean.setPassword(reader.getAttributeValue(null, PASSWORD));
                    databaseDetails.put(reader.getAttributeValue(null, NAME), dataBaseBean);
                }
                reader.next();
            }
        } catch (Exception e) {
            logger.log(Level.FINE, "Exception occured in DatabaseDetailsXmlParser{0}", e.getMessage());
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
                if (inputStream != null) {
                    inputStream.close();
                }
            } catch (Exception e) {
                logger.log(Level.FINE, "Exception occured in DatabaseDetailsXmlParser{0}", e.getMessage());
            }
        }
    }

    public static DataBaseBean getDataBaseDetails(String name) {
        return databaseDetails.get(name);
    }

}
