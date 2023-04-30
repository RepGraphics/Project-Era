$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: 'https://corsproxy.io/?https://ark.wiki.gg/index.php?title=Data:Official_server_rates&action=raw&ctype=application%2Fjson',
        dataType: 'json',
         success: function(data) {
          let Taming = `Taming: ${data.Conquest.TamingSpeedMultiplier}x`;
          let Harvest = `Harvest: ${data.Conquest.HarvestAmountMultiplier}x`;
          let XP = `Experience: ${data.Conquest.XPMultiplier}x`;
          let Maturation = `Maturation: ${data.Conquest.BabyMatureSpeedMultiplier}x`;
          let Hatching = `Hatching: ${data.Conquest.EggHatchSpeedMultiplier}x`;
          let Imprint = `Imprint: ${data.Conquest.BabyImprintAmountMultiplier}x`;
          let Hexagons = `Hexagons: ${data.Conquest.HexagonRewardMultiplier}x`;
          const tbody = $('#table-rates-conquest tbody');
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
          const tbody = $('#table-rates-conquest tbody');
          tbody.empty();
          const tr = $('<tr>').append(
            $('<td>').text('Failed to fetch data from the API')
          );
          tbody.append(tr);
        }
      });
});