package serviceautomation.portfolio;

import com.google.common.collect.MapDifference;
import com.google.common.collect.Maps;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import serviceautomation.RestClient;
import serviceautomation.RestImplementation;
import serviceautomation.ServiceResponse;
import serviceautomation.XmlUtil;

import java.util.*;
import java.util.logging.Logger;

import static serviceautomation.RestImplementation.exactMatchRequired;

/**
 * Created by vishnuprasadk on 26/6/17.
 */
public class AccountActivities {


    Map<String, ServiceResponse> accountActivityNRTMap = null;
    Map<String, ServiceResponse> accountActivityMap = null;
    Map accountActivitiesMap = null;


    private static final Logger logger = Logger.getLogger(AccountActivities.class.getName());

    @And("^I process AccountActivities response using xslt$")
    public void processAccountyActivities() throws Exception {
        String xsltFileName = "ForwardBalance_Txns.xslt";
        accountActivitiesMap = XmlUtil.parseResponse(RestClient.getOutputResponse(),xsltFileName,exactMatchRequired);
        logger.info("AccountActivities xslt output "+accountActivitiesMap);
    }

    @And("^I process AccountActivityNRT response using xslt$")
    public void processAccountActivityNRT() throws Exception {
        String xsltFileName = "ForwardBalance_Txns.xslt";
        accountActivityNRTMap = XmlUtil.parseResponse(RestClient.getOutputResponse(),xsltFileName,exactMatchRequired);
        logger.info("AccountActivities xslt output "+accountActivityNRTMap);
    }

    @And("^I process AccountActivity response using xslt$")
    public void processAccountActivity() throws Exception {
        String xsltFileName = "AccountActivity.xslt";
        accountActivityMap = XmlUtil.parseResponse(RestClient.getOutputResponse(),xsltFileName,exactMatchRequired);
        logger.info("AccountActivities xslt output "+accountActivityMap);
    }

    @Then("^I verify the AccountActivity service returns all the accounts from AccountActivityNRT service$")
    public void verifyAllAccountActitivitesRetrieved(){
        Map map_backend = new HashMap();
        map_backend.putAll(accountActivityNRTMap);

        Map map_fapi = new TreeMap();
        map_fapi.putAll(accountActivitiesMap);

        MapDifference difference = Maps.difference(map_fapi,map_backend);
        logger.info("Records only in fapi \n"+difference.entriesOnlyOnLeft());
        logger.info("Records only in backend \n"+difference.entriesOnlyOnRight());
        logger.info("Records differing \n"+difference.entriesDiffering());

        Assert.assertEquals(map_fapi,map_backend);
    }

    @And("^I verify the AccountActivity service returns all the accounts from both the services$")
    public void verifyAllAccountActivitiesRetrievedForCashBalance(){
        Map map_backend = new TreeMap();

        Iterator<String> iterator = accountActivityNRTMap.keySet().iterator();
        while(iterator.hasNext()) {
            String key = iterator.next();
            Set<String> histAccounts = accountActivityMap.keySet();
            if(histAccounts.contains(key)) {
                ServiceResponse serviceResponse = accountActivityMap.get(key);
                String description = serviceResponse.getMap().get("description");
                String descAndSymb = serviceResponse.getMap().get("descAndSymbol");
                if((description!=null && !description.equalsIgnoreCase("") && !description.equalsIgnoreCase("null"))) {
                    ServiceResponse serviceResponseNRT = accountActivityNRTMap.get(key);
                    serviceResponseNRT.getMap().put("description", description);
                }
                if((descAndSymb!=null && !descAndSymb.equalsIgnoreCase("") && !descAndSymb.equalsIgnoreCase("null"))) {
                    ServiceResponse serviceResponseNRT = accountActivityNRTMap.get(key);
                    serviceResponseNRT.getMap().put("descAndSymbol", descAndSymb);
                }
            }
        }

        map_backend.putAll(accountActivityNRTMap);
        Map map_fapi = new TreeMap();
        map_fapi.putAll(accountActivitiesMap);

        MapDifference difference = Maps.difference(map_fapi,map_backend);
        logger.info("Records only in fapi \n"+difference.entriesOnlyOnLeft());
        logger.info("Records only in backend \n"+difference.entriesOnlyOnRight());
        logger.info("Records differing \n"+difference.entriesDiffering());

        Assert.assertEquals(map_fapi,map_backend);
    }

}
