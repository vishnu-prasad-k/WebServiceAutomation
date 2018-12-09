package serviceautomation;

import org.glassfish.jersey.SslConfigurator;
import org.restlet.data.Reference;
import serviceautomation.util.ServerInfoBean;

import javax.net.ssl.SSLContext;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

/**
 * Created by vishnuprasadk on 12/11/17.
 * This class has all the methods required to make REST service calls and fetch the json response and the status
 */
public class RestClient {

    private static Client client = null;
    private static Response response = null;

    private static String outputResponse = null;
    private static int statusCode = 0;


    //To accept all the hostnames starting with 'sgl'
    static {
        javax.net.ssl.HttpsURLConnection.setDefaultHostnameVerifier(
                new javax.net.ssl.HostnameVerifier(){
                    public boolean verify (String hostname, javax.net.ssl.SSLSession sslSession) {
                        if(hostname.contains("sgl")) {
                            return true;
                        }
                        return false;
                    }
                }
        );
    }

    static void callHttpsGetUrl(ServerInfoBean serverInfoBean, Reference path, MultivaluedMap<String, Object> headers) {
        client = getHttpsConnection(serverInfoBean);
        response = client.target(serverInfoBean.getEndpointUrl() + path.toString())
                .request(MediaType.APPLICATION_JSON)
                .headers(headers)
                .get(Response.class);
        setOutputResponse(response.readEntity(String.class));
        setStatusCode(response.getStatus());
    }

    static void callHttpsPutUrl(ServerInfoBean serverInfoBean, Reference path, MultivaluedMap<String, Object> headers, String jsonBodyInput) {
        client = getHttpsConnection(serverInfoBean);
        response = client.target(serverInfoBean.getEndpointUrl() + path.toString())
                .request(MediaType.APPLICATION_JSON)
                .headers(headers)
                .put(Entity.json(jsonBodyInput), Response.class);
        setOutputResponse(response.readEntity(String.class));
        setStatusCode(response.getStatus());
    }

    static void callHttpsPostUrl(ServerInfoBean serverInfoBean, Reference path, MultivaluedMap<String, Object> headers, String jsonBodyInput) {
        client = getHttpsConnection(serverInfoBean);
        response = client.target(serverInfoBean.getEndpointUrl() + path.toString())
                .request(MediaType.APPLICATION_JSON)
                .headers(headers)
                .post(Entity.json(jsonBodyInput), Response.class);
        setOutputResponse(response.readEntity(String.class));
        setStatusCode(response.getStatus());
    }

    private static Client getHttpsConnection(ServerInfoBean serverInfoBean) {
        SslConfigurator sslConfigurator = SslConfigurator.newInstance();
        sslConfigurator.trustStoreFile(serverInfoBean.getTrustStore());
        sslConfigurator.trustStorePassword(serverInfoBean.getTrustStorePassword());
        sslConfigurator.trustStoreType("JKS");
        sslConfigurator.keyStoreFile(serverInfoBean.getKeyStore());
        sslConfigurator.keyStorePassword(serverInfoBean.getKeyStorePassword());
        sslConfigurator.keyStoreType("PKCS12");
        SSLContext sslContext = sslConfigurator.createSSLContext();
        client = ClientBuilder.newBuilder().sslContext(sslContext).build();
        return client;
    }


    public static String getOutputResponse() {
        return outputResponse;
    }

    public static void setOutputResponse(String outputResponse) {
        RestClient.outputResponse = outputResponse;
    }

    public static int getStatusCode() {
        return statusCode;
    }

    public static void setStatusCode(int statusCode) {
        RestClient.statusCode = statusCode;
    }
}
