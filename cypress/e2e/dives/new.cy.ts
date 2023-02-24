describe("New dive", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.signIn(1);
    cy.visit("/dives/new");
  });

  it("Creates new dive", () => {
    // Basics section

    // Open datetimepicker
    cy.getByDataCy("DateTimePicker-setDateAndTime").click();
    cy.getByDataCy("DateTimePicker-dayRadio-12").first().click();
    cy.getByDataCy("DateTimePicker-timeInput").type("21:37");
    cy.getByDataCy("DateTimePicker-submit").click();

    cy.getInputByName("type").check("Shore");

    cy.getInputByName("length").type("54");
    cy.getInputByName("depth.average").type("16");
    cy.getInputByName("depth.max").type("24");

    // Location section
    cy.get("button").contains("Location").click();

    cy.getInputByName("location.country.name").type("Croatia");
    cy.get("li[data-option-index='0']").click();
    cy.getInputByName("location.city").type("Trogir");
    cy.getInputByName("location.diveCenter").type("Trogir dive center");

    // Details section
    cy.get("button").contains("Details").click();

    cy.getInputByName("water").check("Salt");
    cy.getInputByName("weights.taken")
      .focus()
      .realType("{rightarrow}".repeat(7));
    cy.getInputByName("weights.ammount").check("tooMuch");

    cy.getInputByName("gear.tanks.count").type("1");
    cy.getInputByName("gear.tanks.type").type("Steel 12l");

    cy.getInputByName("gear.exposureProtection.type").type("Wetsuit");
    cy.getInputByName("gear.exposureProtection.thickness").type("7");

    cy.get("button").contains("Show more").click();

    cy.getInputByName("gear.bcd").type("xDeep");
    cy.getInputByName("gear.fins").type("OMS");
    cy.getInputByName("gear.regulator").type("Apex");

    cy.getInputByName("temperature.air")
      .focus()
      .realType("{rightarrow}".repeat(57));
    cy.getInputByName("temperature.water.surface")
      .focus()
      .realType("{rightarrow}".repeat(44));
    cy.getInputByName("temperature.water.bottom")
      .focus()
      .realType("{rightarrow}".repeat(30));

    cy.getInputByName("diveBuddy").type("Joe Doe");
    cy.getByDataCy("notes").type(
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
    );

    cy.get("button").contains("Save").click();

    cy.getByDataCy("New-FormSubmittedModal-continue").click();
  });
});

export {};
