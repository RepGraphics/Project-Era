$(document).ready(function() {
  if (window.location.pathname.includes('/XBOX-Official.html')) {
    $('#search').on('click', function() {
      let query = $('#search-bar').val().toLowerCase();
      $.ajax({
        method: "GET",
        url: 'https://corsproxy.io/?http://arkdedicated.com/xbox/cache/officialserverlist.json',
        dataType: 'json',
        success: function(data) {
          const filteredData = data.filter(function(server) {
            return server.Name.toLowerCase().includes(query);
          });
          const tbody = $('#table tbody');
          tbody.empty();
          for (let i = 0; i < filteredData.length; i++) {
            const server = filteredData[i];
            const tr = $('<tr>').append(
              $('<td>').text(server.Name),
              $('<td>').text(server.MapName),
              $('<td>').text(server.DayTime),
              $('<td>').text(`${server.NumPlayers}/${server.MaxPlayers}`)
            );
            tbody.append(tr);
          }
        },
        error: function() {
          const tbody = $('#table tbody');
          tbody.empty();
          const tr = $('<tr>').append(
            $('<td>').text('Failed to fetch data from the API')
          );
          tbody.append(tr);
        }
      });
    });

    const searchInput = document.getElementById("search-bar");

    searchInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        let query = $('#search-bar').val().toLowerCase();
        $.ajax({
          method: "GET",
          url: 'https://corsproxy.io/?http://arkdedicated.com/xbox/cache/officialserverlist.json',
          dataType: 'json',
          success: function(data) {
            const filteredData = data.filter(function(server) {
              return server.Name.toLowerCase().includes(query);
            });
            const tbody = $('#table tbody');
            tbody.empty();
            for (let i = 0; i < filteredData.length; i++) {
              const server = filteredData[i];
              const tr = $('<tr>').append(
                $('<td>').text(server.Name),
                $('<td>').text(server.MapName),
                $('<td>').text(server.DayTime),
                $('<td>').text(`${server.NumPlayers}/${server.MaxPlayers}`)
              );
              tbody.append(tr);
            }
          },
          error: function() {
            const tbody = $('#table tbody');
            tbody.empty();
            const tr = $('<tr>').append(
              $('<td>').text('Failed to fetch data from the API')
            );
            tbody.append(tr);
          }
        });
      }
    });
  }
});