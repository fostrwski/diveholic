describe("New dive form", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.signIn(1);
  });

  it("Creates new dive", () => {
    cy.visit("/dives/new");

    // Basics section
    cy.getInputByName("type").check("shore");

    // Open datetimepicker
    cy.getByDataCy("setDateAndTime").click();
    cy.getByDataCy("datetimepicker-dayRadio-12").click();
    cy.getByDataCy("datetimepicker-submit").click();

    cy.getInputByName("length").type("54");
    cy.getInputByName("depth.average").type("16");
    cy.getInputByName("depth.max").type("24");

    // Location section
    cy.get("button").contains("Location").click();

    cy.getInputByName("location.country.name").type("Croatia");
    cy.getInputByName("location.city").type("Trogir");
    cy.getInputByName("location.diveCenter").type("Trogir dive center");

    // Details section
    cy.get("button").contains("Details").click();

    cy.getInputByName("water").check("salt");
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

    cy.get("button").contains("Save").click()
  });
});

export {};
