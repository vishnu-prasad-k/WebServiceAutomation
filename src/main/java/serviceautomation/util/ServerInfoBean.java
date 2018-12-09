package serviceautomation.util;

/**
 * Created by vishnuprasadk on 12/11/17.
 * This Bean is used to save the certificate details for each environment
 */
public class ServerInfoBean {

    private String endpointUrl;
    private String trustStore;
    private String trustStorePassword;
    private String keyStore;
    private String keyStorePassword;

    ServerInfoBean() {

    }

    public ServerInfoBean(String endpointUrl, String trustStore, String trustStorePassword, String keyStore, String keyStorePassword) {
        this.endpointUrl = endpointUrl;
        this.trustStore = trustStore;
        this.trustStorePassword = trustStorePassword;
        this.keyStore = keyStore;
        this.keyStorePassword = keyStorePassword;
    }

    public String getEndpointUrl() {
        return endpointUrl;
    }

    public void setEndpointUrl(String endpointUrl) {
        this.endpointUrl = endpointUrl;
    }

    public String getTrustStore() {
        return trustStore;
    }

    public void setTrustStore(String trustStore) {
        this.trustStore = trustStore;
    }

    public String getTrustStorePassword() {
        return trustStorePassword;
    }

    public void setTrustStorePassword(String trustStorePassword) {
        this.trustStorePassword = trustStorePassword;
    }

    public String getKeyStore() {
        return keyStore;
    }

    public void setKeyStore(String keyStore) {
        this.keyStore = keyStore;
    }

    public String getKeyStorePassword() {
        return keyStorePassword;
    }

    public void setKeyStorePassword(String keyStorePassword) {
        this.keyStorePassword = keyStorePassword;
    }
}
