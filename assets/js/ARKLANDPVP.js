$(document).ready(function() {
    if (window.location.pathname.includes('/ARKLANDPVP.html')) {
        const query = 'arklandpvp';
        console.log(query)
        $.ajax({
          method: "GET",
          url: 'https://corsproxy.io/?http://arkdedicated.com/xbox/cache/unofficialserverlist.json',
          dataType: 'json',
           success: function(data) {
            const filteredData = data.filter(function(server) {
              return server.Name.toLowerCase().includes(query);
            });
            const tbody = $('#table tbody');
            tbody.empty();
            filteredData.forEach(function(server) {
            console.log(server)
              const tr = $('<tr>').append(
                $('<td>').text(server.Name),
                $('<td>').text(server.MapName),
                $('<td>').text(server.DayTime),
                $('<td>').text(`${server.NumPlayers}/${server.MaxPlayers}`)
              );
              tbody.append(tr);
            });
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