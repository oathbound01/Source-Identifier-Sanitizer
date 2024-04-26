
    // Check for the input box
        var checkInputBox = setInterval(function() {

            var linkBox = document.querySelector("#share-url");

            if (linkBox) {

                // Get the generated link from the input box
                var generatedLinkValue = linkBox.value;

                // Sanitize the link by removing the "si" parameter from the query string
                var sanitizedLink = generatedLinkValue.replace(/[\?&]si=[^&]+(?=&|$)/, "");

                // Update the value of the input field in the popup box with the modified link
                linkBox.value = sanitizedLink;
            }
        }, 100);

