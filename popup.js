

document.getElementById('clickMe').addEventListener('click', function() {
    alert('Hello from My Extension!');
});

document.addEventListener("DOMContentLoaded", function () {
  const fetchButton = document.getElementById("fetchTranscript");

  fetchButton.addEventListener("click", async () => {
    // Get the active tab URL
    const [tab] = await chrome.scripting.executeScript({
      target: { tabId: chrome.tabs.TAB_ID_NONE },
      function: () => window.location.href,
    });

    // Check if the current page is a YouTube video
    if (tab && tab.startsWith("https://www.youtube.com/watch")) {
      // Use the 'youtube-transcript' package to fetch the transcript
      const videoId = tab.split("v=")[1];
      try {
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);

        // Display the transcript in an alert (for testing purposes)
        alert("Video Transcript:\n" + transcript.map(entry => entry.text).join("\n"));
      } catch (error) {
        console.error("Error fetching transcript:", error);
        alert("An error occurred while fetching the transcript.");
      }
    } else {
      // Display an error message if not on a YouTube video
      alert("This is not a YouTube video page.");
    }
  });
});
