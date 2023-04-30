$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: 'https://corsproxy.io/?https://ark.wiki.gg/index.php?title=Data:Official_server_rates&action=raw&ctype=application%2Fjson',
        dataType: 'json',
         success: function(data) {
          let Taming = `Taming: ${data.SmallTribes.TamingSpeedMultiplier}x`;
          let Harvest = `Harvest: ${data.SmallTribes.HarvestAmountMultiplier}x`;
          let XP = `Experience: ${data.SmallTribes.XPMultiplier}x`;
          let Maturation = `Maturation: ${data.SmallTribes.BabyMatureSpeedMultiplier}x`;
          let Hatching = `Hatching: ${data.SmallTribes.EggHatchSpeedMultiplier}x`;
          let Imprint = `Imprint: ${data.SmallTribes.BabyImprintAmountMultiplier}x`;
          let Hexagons = `Hexagons: ${data.SmallTribes.HexagonRewardMultiplier}x`;
          const tbody = $('#table-rates-smalls tbody');
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
          const tbody = $('#table-rates-smalls tbody');
          tbody.empty();
          const tr = $('<tr>').append(
            $('<td>').text('Failed to fetch data from the API')
          );
          tbody.append(tr);
        }
      });
});