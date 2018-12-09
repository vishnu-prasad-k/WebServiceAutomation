$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Orders.feature");
formatter.feature({
  "line": 2,
  "name": "Verification of orders.json service",
  "description": "",
  "id": "verification-of-orders.json-service",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Orderbook_Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Validate all the fields and their values of Orders.json against database values",
  "description": "",
  "id": "verification-of-orders.json-service;validate-all-the-fields-and-their-values-of-orders.json-against-database-values",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d\u003cBU\u003e\u0026orderid\u003d\u003corder_ID\u003e\u0026includeHistroicalOrders\u003dtrue",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I set the Database credentials to OYUSIT",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I establish the Database connection",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I pass the database query",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "SELECT * from DSP_INT_ORDER t where t.ORDER_ID\u003d\u0027\u003corder_ID\u003e\u0027 and t.BU\u003d\u0027\u003cBU\u003e\u0027"
  }
});
formatter.step({
  "line": 17,
  "name": "I validate the value of the following data from the webservice and database",
  "rows": [
    {
      "cells": [
        "wsresponsefieldname",
        "dbfieldname",
        "type"
      ],
      "line": 18
    },
    {
      "cells": [
        "portfolioId",
        "PORTFOLIO_ID",
        "String"
      ],
      "line": 19
    },
    {
      "cells": [
        "orderId",
        "ORDER_ID",
        "String"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "verification-of-orders.json-service;validate-all-the-fields-and-their-values-of-orders.json-against-database-values;",
  "rows": [
    {
      "cells": [
        "BU",
        "order_ID"
      ],
      "line": 22,
      "id": "verification-of-orders.json-service;validate-all-the-fields-and-their-values-of-orders.json-against-database-values;;1"
    },
    {
      "cells": [
        "0058",
        "SA004GVJ"
      ],
      "line": 23,
      "id": "verification-of-orders.json-service;validate-all-the-fields-and-their-values-of-orders.json-against-database-values;;2"
    },
    {
      "cells": [
        "0059",
        "OPODSC1634400008"
      ],
      "line": 24,
      "id": "verification-of-orders.json-service;validate-all-the-fields-and-their-values-of-orders.json-against-database-values;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45209288,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "All the setup is completed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I change the endpoint to RMEUAT",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setUp()"
});
formatter.result({
  "duration": 129744126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RMEUAT",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.changeEndPoint(String)"
});
formatter.result({
  "duration": 49285467,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validate all the fields and their values of Orders.json against database values",
  "description": "",
  "id": "verification-of-orders.json-service;validate-all-the-fields-and-their-values-of-orders.json-against-database-values;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Orderbook_Test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d0058\u0026orderid\u003dSA004GVJ\u0026includeHistroicalOrders\u003dtrue",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I set the Database credentials to OYUSIT",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I establish the Database connection",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I pass the database query",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "SELECT * from DSP_INT_ORDER t where t.ORDER_ID\u003d\u0027SA004GVJ\u0027 and t.BU\u003d\u00270058\u0027"
  }
});
formatter.step({
  "line": 17,
  "name": "I validate the value of the following data from the webservice and database",
  "rows": [
    {
      "cells": [
        "wsresponsefieldname",
        "dbfieldname",
        "type"
      ],
      "line": 18
    },
    {
      "cells": [
        "portfolioId",
        "PORTFOLIO_ID",
        "String"
      ],
      "line": 19
    },
    {
      "cells": [
        "orderId",
        "ORDER_ID",
        "String"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 10
    },
    {
      "val": "/api/cs/pb/apac/v3/Orders.json?bu\u003d0058\u0026orderid\u003dSA004GVJ\u0026includeHistroicalOrders\u003dtrue",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.hitServiceURL(String,String)"
});
formatter.result({
  "duration": 100733395,
  "error_message": "java.lang.IllegalStateException: Cannot find key store file \"/Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12\".\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:680)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:202)\n\tat ✽.When I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d0058\u0026orderid\u003dSA004GVJ\u0026includeHistroicalOrders\u003dtrue(Orders.feature:10)\nCaused by: java.io.FileNotFoundException: /Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12 (No such file or directory)\n\tat java.io.FileInputStream.open0(Native Method)\n\tat java.io.FileInputStream.open(FileInputStream.java:195)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:138)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:93)\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:664)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:202)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "OYUSIT",
      "offset": 34
    }
  ],
  "location": "DatabaseImplementation.setDBCredentials(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DatabaseImplementation.getConnection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DatabaseImplementation.executeQuery(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Orders.validate_data_WS_DB(OrdersModel\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16818,
  "status": "passed"
});
formatter.before({
  "duration": 4901960,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "All the setup is completed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I change the endpoint to RMEUAT",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setUp()"
});
formatter.result({
  "duration": 1762822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RMEUAT",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.changeEndPoint(String)"
});
formatter.result({
  "duration": 11022564,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate all the fields and their values of Orders.json against database values",
  "description": "",
  "id": "verification-of-orders.json-service;validate-all-the-fields-and-their-values-of-orders.json-against-database-values;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Orderbook_Test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d0059\u0026orderid\u003dOPODSC1634400008\u0026includeHistroicalOrders\u003dtrue",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I set the Database credentials to OYUSIT",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I establish the Database connection",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I pass the database query",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "SELECT * from DSP_INT_ORDER t where t.ORDER_ID\u003d\u0027OPODSC1634400008\u0027 and t.BU\u003d\u00270059\u0027"
  }
});
formatter.step({
  "line": 17,
  "name": "I validate the value of the following data from the webservice and database",
  "rows": [
    {
      "cells": [
        "wsresponsefieldname",
        "dbfieldname",
        "type"
      ],
      "line": 18
    },
    {
      "cells": [
        "portfolioId",
        "PORTFOLIO_ID",
        "String"
      ],
      "line": 19
    },
    {
      "cells": [
        "orderId",
        "ORDER_ID",
        "String"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 10
    },
    {
      "val": "/api/cs/pb/apac/v3/Orders.json?bu\u003d0059\u0026orderid\u003dOPODSC1634400008\u0026includeHistroicalOrders\u003dtrue",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.hitServiceURL(String,String)"
});
formatter.result({
  "duration": 2361203,
  "error_message": "java.lang.IllegalStateException: Cannot find key store file \"/Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12\".\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:680)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:202)\n\tat ✽.When I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d0059\u0026orderid\u003dOPODSC1634400008\u0026includeHistroicalOrders\u003dtrue(Orders.feature:10)\nCaused by: java.io.FileNotFoundException: /Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12 (No such file or directory)\n\tat java.io.FileInputStream.open0(Native Method)\n\tat java.io.FileInputStream.open(FileInputStream.java:195)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:138)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:93)\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:664)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:202)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "OYUSIT",
      "offset": 34
    }
  ],
  "location": "DatabaseImplementation.setDBCredentials(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DatabaseImplementation.getConnection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DatabaseImplementation.executeQuery(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Orders.validate_data_WS_DB(OrdersModel\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 71885,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Validate the basic functionality of OrderValidationHistory service",
  "description": "",
  "id": "verification-of-orders.json-service;validate-the-basic-functionality-of-ordervalidationhistory-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I have the below json input",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 30,
    "value": "{\n\"userPID\":\"\u003cprimary_id\u003e\",\"orderIDs\":[{\"orderID\":\"\u003corder_id\u003e\",\"sourceSystem\":\"\u003csource_system\u003e\"}]\n}"
  }
});
formatter.step({
  "line": 35,
  "name": "I hit the POST service url /orderbook/v2/OrderValidationHistory.json",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I set the Database credentials to OYUSIT",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I establish the Database connection",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I pass the database query",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 39,
    "value": "SELECT * from DSP_INT_ORDER t where t.ORDER_ID\u003d\u0027\u003corder_ID\u003e\u0027"
  }
});
formatter.step({
  "line": 42,
  "name": "I validate the value of the following data from the webservice and database",
  "rows": [
    {
      "cells": [
        "wsresponsefieldname",
        "dbfieldname",
        "type"
      ],
      "line": 43
    },
    {
      "cells": [
        "portfolioId",
        "PORTFOLIO_ID",
        "String"
      ],
      "line": 44
    },
    {
      "cells": [
        "orderId",
        "ORDER_ID",
        "String"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "verification-of-orders.json-service;validate-the-basic-functionality-of-ordervalidationhistory-service;",
  "rows": [
    {
      "cells": [
        "primary_id",
        "order_ID",
        "source_system"
      ],
      "line": 47,
      "id": "verification-of-orders.json-service;validate-the-basic-functionality-of-ordervalidationhistory-service;;1"
    },
    {
      "cells": [
        "123456",
        "SA004GVJ",
        "SpiritAsia"
      ],
      "line": 48,
      "id": "verification-of-orders.json-service;validate-the-basic-functionality-of-ordervalidationhistory-service;;2"
    },
    {
      "cells": [
        "34298832",
        "OPODSC1634400008",
        "T24"
      ],
      "line": 49,
      "id": "verification-of-orders.json-service;validate-the-basic-functionality-of-ordervalidationhistory-service;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1020996,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "All the setup is completed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I change the endpoint to RMEUAT",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setUp()"
});
formatter.result({
  "duration": 401174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RMEUAT",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.changeEndPoint(String)"
});
formatter.result({
  "duration": 2642181,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Validate the basic functionality of OrderValidationHistory service",
  "description": "",
  "id": "verification-of-orders.json-service;validate-the-basic-functionality-of-ordervalidationhistory-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Orderbook_Test"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I have the below json input",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 30,
    "value": "{\n\"userPID\":\"123456\",\"orderIDs\":[{\"orderID\":\"\u003corder_id\u003e\",\"sourceSystem\":\"SpiritAsia\"}]\n}"
  }
});
formatter.step({
  "line": 35,
  "name": "I hit the POST service url /orderbook/v2/OrderValidationHistory.json",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I set the Database credentials to OYUSIT",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I establish the Database connection",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I pass the database query",
  "matchedColumns": [
    1
  ],
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 39,
    "value": "SELECT * from DSP_INT_ORDER t where t.ORDER_ID\u003d\u0027SA004GVJ\u0027"
  }
});
formatter.step({
  "line": 42,
  "name": "I validate the value of the following data from the webservice and database",
  "rows": [
    {
      "cells": [
        "wsresponsefieldname",
        "dbfieldname",
        "type"
      ],
      "line": 43
    },
    {
      "cells": [
        "portfolioId",
        "PORTFOLIO_ID",
        "String"
      ],
      "line": 44
    },
    {
      "cells": [
        "orderId",
        "ORDER_ID",
        "String"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.inputJson(String)"
});
formatter.result({
  "duration": 60252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 10
    },
    {
      "val": "/orderbook/v2/OrderValidationHistory.json",
      "offset": 27
    }
  ],
  "location": "CommonStepDefinitions.hitServiceURL(String,String)"
});
formatter.result({
  "duration": 1918403,
  "error_message": "java.lang.IllegalStateException: Cannot find key store file \"/Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12\".\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:680)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:201)\n\tat ✽.When I hit the POST service url /orderbook/v2/OrderValidationHistory.json(Orders.feature:35)\nCaused by: java.io.FileNotFoundException: /Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12 (No such file or directory)\n\tat java.io.FileInputStream.open0(Native Method)\n\tat java.io.FileInputStream.open(FileInputStream.java:195)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:138)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:93)\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:664)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:201)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "OYUSIT",
      "offset": 34
    }
  ],
  "location": "DatabaseImplementation.setDBCredentials(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DatabaseImplementation.getConnection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DatabaseImplementation.executeQuery(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Orders.validate_data_WS_DB(OrdersModel\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 106442,
  "status": "passed"
});
formatter.before({
  "duration": 1941196,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "All the setup is completed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I change the endpoint to RMEUAT",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setUp()"
});
formatter.result({
  "duration": 790134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RMEUAT",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.changeEndPoint(String)"
});
formatter.result({
  "duration": 6324161,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Validate the basic functionality of OrderValidationHistory service",
  "description": "",
  "id": "verification-of-orders.json-service;validate-the-basic-functionality-of-ordervalidationhistory-service;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Orderbook_Test"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I have the below json input",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 30,
    "value": "{\n\"userPID\":\"34298832\",\"orderIDs\":[{\"orderID\":\"\u003corder_id\u003e\",\"sourceSystem\":\"T24\"}]\n}"
  }
});
formatter.step({
  "line": 35,
  "name": "I hit the POST service url /orderbook/v2/OrderValidationHistory.json",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I set the Database credentials to OYUSIT",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I establish the Database connection",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I pass the database query",
  "matchedColumns": [
    1
  ],
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 39,
    "value": "SELECT * from DSP_INT_ORDER t where t.ORDER_ID\u003d\u0027OPODSC1634400008\u0027"
  }
});
formatter.step({
  "line": 42,
  "name": "I validate the value of the following data from the webservice and database",
  "rows": [
    {
      "cells": [
        "wsresponsefieldname",
        "dbfieldname",
        "type"
      ],
      "line": 43
    },
    {
      "cells": [
        "portfolioId",
        "PORTFOLIO_ID",
        "String"
      ],
      "line": 44
    },
    {
      "cells": [
        "orderId",
        "ORDER_ID",
        "String"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.inputJson(String)"
});
formatter.result({
  "duration": 724770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 10
    },
    {
      "val": "/orderbook/v2/OrderValidationHistory.json",
      "offset": 27
    }
  ],
  "location": "CommonStepDefinitions.hitServiceURL(String,String)"
});
formatter.result({
  "duration": 1772289,
  "error_message": "java.lang.IllegalStateException: Cannot find key store file \"/Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12\".\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:680)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:201)\n\tat ✽.When I hit the POST service url /orderbook/v2/OrderValidationHistory.json(Orders.feature:35)\nCaused by: java.io.FileNotFoundException: /Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12 (No such file or directory)\n\tat java.io.FileInputStream.open0(Native Method)\n\tat java.io.FileInputStream.open(FileInputStream.java:195)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:138)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:93)\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:664)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:201)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "OYUSIT",
      "offset": 34
    }
  ],
  "location": "DatabaseImplementation.setDBCredentials(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DatabaseImplementation.getConnection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DatabaseImplementation.executeQuery(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Orders.validate_data_WS_DB(OrdersModel\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 127506,
  "status": "passed"
});
formatter.before({
  "duration": 4390500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "All the setup is completed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I change the endpoint to RMEUAT",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setUp()"
});
formatter.result({
  "duration": 732049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RMEUAT",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.changeEndPoint(String)"
});
formatter.result({
  "duration": 4132021,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "To verify the success response of Orders service",
  "description": "",
  "id": "verification-of-orders.json-service;to-verify-the-success-response-of-orders-service",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d\u003cBU\u003e\u0026orderid\u003d\u003corder_ID\u003e\u0026includeHistroicalOrders\u003dtrue",
  "rows": [
    {
      "cells": [
        "BU",
        "order_ID"
      ],
      "line": 53
    },
    {
      "cells": [
        "0058",
        "234234"
      ],
      "line": 54
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I Check for the Success Status Code",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 10
    },
    {
      "val": "/api/cs/pb/apac/v3/Orders.json?bu\u003d\u003cBU\u003e\u0026orderid\u003d\u003corder_ID\u003e\u0026includeHistroicalOrders\u003dtrue",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.hitServiceURL(String,String)"
});
formatter.result({
  "duration": 390349,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027serviceautomation.common.CommonStepDefinitions.hitServiceURL(String,String) in file:/Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/target/test-classes/\u0027 with pattern [I hit the (.*) service url (.*)] is declared with 2 parameters. However, the gherkin step has 3 arguments [GET, /api/cs/pb/apac/v3/Orders.json?bu\u003d\u003cBU\u003e\u0026orderid\u003d\u003corder_ID\u003e\u0026includeHistroicalOrders\u003dtrue, Table:[[BU, order_ID], [0058, 234234]]]. \nStep: When I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d\u003cBU\u003e\u0026orderid\u003d\u003corder_ID\u003e\u0026includeHistroicalOrders\u003dtrue\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "location": "CommonStepDefinitions.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22592,
  "status": "passed"
});
formatter.before({
  "duration": 1289479,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "All the setup is completed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I change the endpoint to RMEUAT",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setUp()"
});
formatter.result({
  "duration": 407464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RMEUAT",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.changeEndPoint(String)"
});
formatter.result({
  "duration": 2372409,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "To verify the failure response of Orders service",
  "description": "",
  "id": "verification-of-orders.json-service;to-verify-the-failure-response-of-orders-service",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d\u003cBU\u003e\u0026orderid\u003d\u003corder_ID\u003e\u0026includeHistroicalOrders\u003dtrue",
  "rows": [
    {
      "cells": [
        "BU",
        "order_ID"
      ],
      "line": 59
    },
    {
      "cells": [
        "0058",
        "234234"
      ],
      "line": 60
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I check for Failure Status Code as 401",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 10
    },
    {
      "val": "/api/cs/pb/apac/v3/Orders.json?bu\u003d\u003cBU\u003e\u0026orderid\u003d\u003corder_ID\u003e\u0026includeHistroicalOrders\u003dtrue",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.hitServiceURL(String,String)"
});
formatter.result({
  "duration": 189050,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027serviceautomation.common.CommonStepDefinitions.hitServiceURL(String,String) in file:/Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/target/test-classes/\u0027 with pattern [I hit the (.*) service url (.*)] is declared with 2 parameters. However, the gherkin step has 3 arguments [GET, /api/cs/pb/apac/v3/Orders.json?bu\u003d\u003cBU\u003e\u0026orderid\u003d\u003corder_ID\u003e\u0026includeHistroicalOrders\u003dtrue, Table:[[BU, order_ID], [0058, 234234]]]. \nStep: When I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d\u003cBU\u003e\u0026orderid\u003d\u003corder_ID\u003e\u0026includeHistroicalOrders\u003dtrue\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 35
    }
  ],
  "location": "CommonStepDefinitions.checkFailureStatus(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12642,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Verify the fields in the orders service",
  "description": "",
  "id": "verification-of-orders.json-service;verify-the-fields-in-the-orders-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d\u003cBU\u003e\u0026orderid\u003d\u003corder_ID\u003e\u0026includeHistroicalOrders\u003dtrue",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I Check for the Success Status Code",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I verify the following fields are present in the service response",
  "rows": [
    {
      "cells": [
        "orderId",
        "groupId",
        "oneTimeSttAmount"
      ],
      "line": 67
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "verification-of-orders.json-service;verify-the-fields-in-the-orders-service;",
  "rows": [
    {
      "cells": [
        "BU",
        "order_ID"
      ],
      "line": 69,
      "id": "verification-of-orders.json-service;verify-the-fields-in-the-orders-service;;1"
    },
    {
      "cells": [
        "0058",
        "23423"
      ],
      "line": 70,
      "id": "verification-of-orders.json-service;verify-the-fields-in-the-orders-service;;2"
    },
    {
      "cells": [
        "0059",
        "234324"
      ],
      "line": 71,
      "id": "verification-of-orders.json-service;verify-the-fields-in-the-orders-service;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6428067,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "All the setup is completed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I change the endpoint to RMEUAT",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setUp()"
});
formatter.result({
  "duration": 480065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RMEUAT",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.changeEndPoint(String)"
});
formatter.result({
  "duration": 10657694,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Verify the fields in the orders service",
  "description": "",
  "id": "verification-of-orders.json-service;verify-the-fields-in-the-orders-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Orderbook_Test"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d0058\u0026orderid\u003d23423\u0026includeHistroicalOrders\u003dtrue",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I Check for the Success Status Code",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I verify the following fields are present in the service response",
  "rows": [
    {
      "cells": [
        "orderId",
        "groupId",
        "oneTimeSttAmount"
      ],
      "line": 67
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 10
    },
    {
      "val": "/api/cs/pb/apac/v3/Orders.json?bu\u003d0058\u0026orderid\u003d23423\u0026includeHistroicalOrders\u003dtrue",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.hitServiceURL(String,String)"
});
formatter.result({
  "duration": 2230200,
  "error_message": "java.lang.IllegalStateException: Cannot find key store file \"/Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12\".\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:680)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:202)\n\tat ✽.When I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d0058\u0026orderid\u003d23423\u0026includeHistroicalOrders\u003dtrue(Orders.feature:64)\nCaused by: java.io.FileNotFoundException: /Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12 (No such file or directory)\n\tat java.io.FileInputStream.open0(Native Method)\n\tat java.io.FileInputStream.open(FileInputStream.java:195)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:138)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:93)\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:664)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:202)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "location": "CommonStepDefinitions.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.verifyFieldsInResponse(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 29146,
  "status": "passed"
});
formatter.before({
  "duration": 1723948,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "All the setup is completed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I change the endpoint to RMEUAT",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setUp()"
});
formatter.result({
  "duration": 1939863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RMEUAT",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.changeEndPoint(String)"
});
formatter.result({
  "duration": 5629049,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Verify the fields in the orders service",
  "description": "",
  "id": "verification-of-orders.json-service;verify-the-fields-in-the-orders-service;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Orderbook_Test"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d0059\u0026orderid\u003d234324\u0026includeHistroicalOrders\u003dtrue",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I Check for the Success Status Code",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I verify the following fields are present in the service response",
  "rows": [
    {
      "cells": [
        "orderId",
        "groupId",
        "oneTimeSttAmount"
      ],
      "line": 67
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 10
    },
    {
      "val": "/api/cs/pb/apac/v3/Orders.json?bu\u003d0059\u0026orderid\u003d234324\u0026includeHistroicalOrders\u003dtrue",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.hitServiceURL(String,String)"
});
formatter.result({
  "duration": 2329002,
  "error_message": "java.lang.IllegalStateException: Cannot find key store file \"/Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12\".\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:680)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:202)\n\tat ✽.When I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu\u003d0059\u0026orderid\u003d234324\u0026includeHistroicalOrders\u003dtrue(Orders.feature:64)\nCaused by: java.io.FileNotFoundException: /Users/vishnuprasadk/IdeaProjects/WebServiceAutomation/certs/S112564.p12 (No such file or directory)\n\tat java.io.FileInputStream.open0(Native Method)\n\tat java.io.FileInputStream.open(FileInputStream.java:195)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:138)\n\tat java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:93)\n\tat org.glassfish.jersey.SslConfigurator.createSSLContext(SslConfigurator.java:664)\n\tat serviceautomation.RESTImplementation.set_endpoint_and_certificate(RESTImplementation.java:243)\n\tat serviceautomation.RESTImplementation.execute_REST_service(RESTImplementation.java:251)\n\tat serviceautomation.common.CommonStepDefinitions.hitServiceURL(CommonStepDefinitions.java:202)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "location": "CommonStepDefinitions.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.verifyFieldsInResponse(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 37075,
  "status": "passed"
});
});