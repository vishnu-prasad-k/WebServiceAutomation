package serviceautomation.orderbook;

import cucumber.api.java.en.And;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Assert;
import serviceautomation.DatabaseConnector;
import serviceautomation.RestImplementation;
import serviceautomation.compare.DataBaseVsWebService;
import serviceautomation.util.CommonModel;

import java.sql.SQLException;
import java.util.List;

/**
 * Created by vishnuprasadk on 17/6/17.
 */
public class Orders {

    @And("^I validate the value of the following fields between the Orders.json webservice response and database resultset$")
    public void validateOrderData(List<CommonModel> fieldNames) throws JSONException, SQLException {
        try {
            DataBaseVsWebService comapre = new DataBaseVsWebService();
            comapre.compareDbVsWs("","WMPortfolioId","PORTFOLIO_ID", fieldNames);
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        } finally {
            DatabaseConnector.closeConnection();
        }
    }

}
