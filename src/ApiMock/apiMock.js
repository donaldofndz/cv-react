class apiMock {
  getBasicData() {
    return {
      name: "José Donaldo Fernández Montenegro",
      studies: [
        {
          nameOfSchool: "UDLA",
          country: "MX",
          completeNameOfSchool: "Universidad de las Americas",
          grade: "Master In Business Administration"
        },
        {
          nameOfSchool: "UNAM",
          country: "MX",
          completeNameOfSchool: "Universidad Nacional Autonoma de México",
          grade: "Computer Engineer"
        }
      ],
      extraInfo: {
          "Email" : "donaldo.fndz@gmail.com",
          "Phone Number" : "+52 (55) 48-90-58-31",
          "GitHub" : "https://github.com/donaldofndz"
      }
    };
  }
}

export default apiMock;
