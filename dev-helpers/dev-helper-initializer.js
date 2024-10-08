/* eslint-disable no-undef */
window.onload = function() {
  window["SwaggerUIBundle"] = window["swagger-ui-bundle"]
  window["SwaggerUIStandalonePreset"] = window["swagger-ui-standalone-preset"]
  // Build a system
  const ui = SwaggerUIBundle({
urls: [
      { url: "./openapi.yaml", name: "OpenAPI" },
      { url: "./baohiemhuychuyenbay.yaml", name: "Bảo hiểm hủy chuyến bay" },
      { url: "./InsuranceBodyCar.yaml", name: "BH Vật chất xe ô tô - (Xe cho thuê theo chuyến)" },
      { url: "./InsurancePersonalAccident.yaml", name: "BH Tai nạn cá nhân" },
      { url: "./InsuranceCivilLiabilityforCar.yaml", name: "Bảo hiểm bắt buộc TNDS xe ô tô" },
      { url: "./InsuranceVoluntarySocial.yaml", name: "BH Xã Hội tự nguyện" },
      { url: "./InsuranceHouseholdHealth.yaml", name: "BH Y Tế hộ gia đình" },
      { url: "./InsuranceCivilLiabilityforBike.yaml", name: "Bảo hiểm bắt buộc TNDS xe mô tô - gắn máy" },
      { url: "./InsuranceCarMaterial.yaml", name: "BH Vật chất xe ô tô" },
      { url: "./InsuranceHospital.yaml", name: "Bảo hiểm Viện phí" },
      { url: "./ForeignVisitorsInVietnam.yaml", name: "Khách nước ngoài tại Việt Nam" },
      { url: "./InsuranceHome.yaml", name: "Bảo hiểm nhà tư nhân" },
      { url: "./CreditSecurity.yaml", name: "Bảo hiểm tín dụng" },
      { url: "./InsuranceDelayChangeFlightCompletely.yaml", name: "Bảo hiểm hoãn chuyến bay" },
      { url: "./InsuranceHomePrivate.yaml", name: "Bảo hiểm nhà tư nhân" },
      { url: "./InsuranceDomesticTravel.yaml", name: "Bảo hiểm du lịch trong nước" },
      { url: "./InsuranceInternationalTravel.yaml", name: "Bảo hiểm du lịch quốc tế" },
      { url: "./InsurancePersonalAccidentPA2.yaml", name: "Bảo hiểm tai nạn cá nhân PA2" },
      { url: "./InsuranceHouseholdAccidents.yaml", name: "Bảo hiểm tai nạn hộ gia đình" },
    ],
    dom_id: "#swagger-ui",
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    // requestSnippetsEnabled: true,
    layout: "StandaloneLayout"
  })

  window.ui = ui

  ui.initOAuth({
    clientId: "your-client-id",
    clientSecret: "your-client-secret-if-required",
    realm: "your-realms",
    appName: "your-app-name",
    scopeSeparator: " ",
    scopes: "openid profile email phone address",
    additionalQueryStringParams: {},
    useBasicAuthenticationWithAccessCodeGrant: false,
    usePkceWithAuthorizationCodeGrant: false
  })
}
