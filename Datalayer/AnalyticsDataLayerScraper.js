document.getElementsByClassName("button sqs-system-button sqs-editable-button")[0]
    .addEventListener('click', event => {
        let findCheckBox = name => Array.from(document.getElementsByTagName("input")).filter(e => e.value === name)[0].checked

        let checkboxStatus = {
            "Analytics Audit": findCheckBox("Analytics Audit"),
            "Analytics Implementation": findCheckBox("Analytics Implementation"),
            "Analytics Reporting": findCheckBox("Analytics Reporting"),
            "Other": findCheckBox("Other")
        }

        dataLayer.push(checkboxStatus);
  })
