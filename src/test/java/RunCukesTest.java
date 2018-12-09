import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

/**
 * Created by vishnuprasadk on 4/1/2017.
 */

@RunWith(CucumberWithSerenity.class)
@CucumberOptions (
        features = "src/test/resources/cucumber/"   //Features Options helps cucumber to locate the feature file in the project
        //, glue = "src/test/java/serviceAutomation/"   //helps Cucumber to locate the Step definitions files
        , plugin = {"junit:reports/cucumber.xml"    //Generates cucumber XML report
                    , "html:reports/cucumber-report"//Generates Cucumber HTML report
                    }
        , strict = false                            //if strict option is set to false then at the execution time, if cucumber
                                                    //encounters any undefined/pending steps then it does not fail the execution
        //, monochrome = true                         //if it is set to true, it means that the console output for cucumber tests
                                                    //are more readable
        , tags = {"@Orderbook_Test"}
)
public class RunCukesTest {

}
