$(document).ready(function() {
    let totalBans = 0;
    $.ajax({
        method: "GET",
        url: 'https://corsproxy.io/?http://arkdedicated.com/xboxbanlist.txt',
        dataType: 'text',
         success: function(data) {
          let bans = data.toString().split("\n");
          let xbox = `XBOX: ${bans.length-1}`;
          const xboxTbody = $('#table-ark-bans tbody');
          xboxTbody.empty();
            xboxTbody.append(
              $('<tr>').text(xbox)
            );
            totalBans += bans.length-1;
        },
        error: function() {
          const xboxTbody = $('#table-ark-bans tbody'); 
          const tr = $('<tr>').append(
            $('<td>').text('XBOX: N/A')
          );
          xboxTbody.append(tr);
        }
      });
      $.ajax({
        method: "GET",
        url: 'https://corsproxy.io/?http://arkdedicated.com/ps4banlist.txt',
        dataType: 'text',
         success: function(data) {
          let bans = data.toString().split("\n");
          let ps = `PlayStation: ${bans.length-1}`;
          const psTbody = $('#table-ark-bans tbody');
            psTbody.append(
              $('<tr>').text(ps)
            );
            totalBans += bans.length-1;
        },
        error: function() {
          const psTbody = $('#table-ark-bans tbody');
          const tr = $('<tr>').append(
            $('<td>').text('PlayStation: N/A')
          );
          psTbody.append(tr);
        }
      });
      $.ajax({
        method: "GET",
        url: 'https://corsproxy.io/?http://arkdedicated.com/banlist.txt',
        dataType: 'text',
         success: function(data) {
          let bans = data.toString().split("\n");
          let pc = `Steam & Epic Games: ${bans.length-1}`;
          totalBans += bans.length-1;
          const total = `Total Banned Players: ${totalBans}`;
          const pcTbody = $('#table-ark-bans tbody');
            pcTbody.append(
              $('<tr>').text(pc),
              $('<tr>').text(total)
            );
        },
        error: function() {
          const pcTbody = $('#table-ark-bans tbody');
          const tr = $('<tr>').append(
            $('<td>').text('Steam & Epic Games: N/A')
          );
          pcTbody.append(tr);
        }
      });

});
