$(document).ready(function() {
        $.ajax({
            method: "GET",
            url: 'https://corsproxy.io/?https://ark.wiki.gg/index.php?title=Data:Official_server_rates&action=raw&ctype=application%2Fjson',
            dataType: 'json',
             success: function(data) {
              let Taming = `Taming: ${data.Official.TamingSpeedMultiplier}x`;
              let Harvest = `Harvest: ${data.Official.HarvestAmountMultiplier}x`;
              let XP = `Experience: ${data.Official.XPMultiplier}x`;
              let Maturation = `Maturation: ${data.Official.BabyMatureSpeedMultiplier}x`;
              let Hatching = `Hatching: ${data.Official.EggHatchSpeedMultiplier}x`;
              let Imprint = `Imprint: ${data.Official.BabyImprintAmountMultiplier}x`;
              let Hexagons = `Hexagons: ${data.Official.HexagonRewardMultiplier}x`;
              const tbody = $('#table-rates-official tbody');
              tbody.empty();
                tbody.append(
                  $('<tr>').text(XP),
                  $('<tr>').text(Taming),
                  $('<tr>').text(Harvest),
                  $('<tr>').text(Maturation),
                  $('<tr>').text(Hatching),
                  $('<tr>').text(Imprint),
                  $('<tr>').text(Hexagons)
                );
            },
            error: function() {
              const tbody = $('#table-rates-official tbody');
              tbody.empty();
              const tr = $('<tr>').append(
                $('<td>').text('Failed to fetch data from the API')
              );
              tbody.append(tr);
            }
          });
    });