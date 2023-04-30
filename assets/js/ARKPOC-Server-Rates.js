$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: 'https://corsproxy.io/?https://ark.wiki.gg/index.php?title=Data:Official_server_rates&action=raw&ctype=application%2Fjson',
        dataType: 'json',
         success: function(data) {
          let Taming = `Taming: ${data.ARKpocalypse.TamingSpeedMultiplier}x`;
          let Harvest = `Harvest: ${data.ARKpocalypse.HarvestAmountMultiplier}x`;
          let XP = `Experience: ${data.ARKpocalypse.XPMultiplier}x`;
          let Maturation = `Maturation: ${data.ARKpocalypse.BabyMatureSpeedMultiplier}x`;
          let Hatching = `Hatching: ${data.ARKpocalypse.EggHatchSpeedMultiplier}x`;
          let Imprint = `Imprint: ${data.ARKpocalypse.BabyImprintAmountMultiplier}x`;
          let Hexagons = `Hexagons: ${data.ARKpocalypse.HexagonRewardMultiplier}x`;
          const tbody = $('#table-rates-arkpoc tbody');
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
          const tbody = $('#table-rates-arkpoc tbody');
          tbody.empty();
          const tr = $('<tr>').append(
            $('<td>').text('Failed to fetch data from the API')
          );
          tbody.append(tr);
        }
      });
});