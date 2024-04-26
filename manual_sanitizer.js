
document.getElementById("button").addEventListener("click", sanitizeLink);

        function sanitizeLink() {

            var input = document.getElementById("linkInput").value;
            var sanitizedLink = sanitize(input);
        
            navigator.clipboard.writeText(sanitizedLink);

            if (input == sanitizedLink) {
                document.getElementById("result").textContent = "The link is already sanitized.";
            } else {
                document.getElementById("result").textContent = "The link has been sanitized and copied to your clipboard.";
            }

        }

        function sanitize(link) {
            
            console.log("Checking for parameters to remove...");

            // Removes the "si" parameter from the URL (Youtube Source Identifier)

            link = link.replace(/[\?&]si=[^&]+(?=&|$)/, "");

            // Removes the "utm_source" parameter from the URL

            link = link.replace(/[\?&]utm_source=[^&]+(?=&|$)/, "");

            // Removes the "igsh" parameter from the URL (Instagram Source Identifier)

            link = link.replace(/[\?&]igsh=[^&]+(?=&|$)/, "");

            // Removes the "mibextid" parameter from the URL (Facebook Reels)

            link = link.replace(/[\?&]mibextid=[^&]+(?=&|$)/, "");

            // Removes trailing slash

            link = link.replace(/\/$/, "");

            return link;
        }
