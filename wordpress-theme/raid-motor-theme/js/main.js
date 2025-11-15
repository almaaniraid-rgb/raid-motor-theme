jQuery(document).ready(function($) {
  const searchForm = $('#raid-search-form');
  const searchInput = $('#search-input');

  if (searchForm.length) {
    searchForm.on('submit', function(e) {
      const query = searchInput.val().trim();

      if (!query) {
        e.preventDefault();
        alert('Per favore inserisci una query di ricerca');
        return;
      }

      if (raidMotor.apiEndpoint) {
        e.preventDefault();
        performAISearch(query);
      }
    });
  }

  function performAISearch(query) {
    const summaryContainer = $('#ai-summary-container');

    summaryContainer.html('<div class="loading">Ricerca in corso con AI...</div>');

    $.ajax({
      url: raidMotor.ajaxurl,
      type: 'POST',
      data: {
        action: 'raid_motor_search',
        nonce: raidMotor.nonce,
        query: query
      },
      success: function(response) {
        if (response.success) {
          displayAISummary(response.data);
        } else {
          summaryContainer.html(
            '<div class="error">Errore nella ricerca: ' + response.data.message + '</div>'
          );
        }
      },
      error: function() {
        summaryContainer.html(
          '<div class="error">Errore di connessione. Riprova più tardi.</div>'
        );
      }
    });
  }

  function displayAISummary(data) {
    const summaryContainer = $('#ai-summary-container');

    let html = '<div class="ai-summary">';
    html += '<h2>🤖 Riepilogo AI</h2>';

    if (data.summary) {
      html += '<p>' + escapeHtml(data.summary) + '</p>';
    }

    if (data.results && data.results.length > 0) {
      html += '<h3>Risultati trovati:</h3>';
      html += '<div class="ai-results">';

      data.results.forEach(function(result) {
        html += '<div class="result-card">';
        html += '<h4><a href="' + escapeHtml(result.url) + '">' + escapeHtml(result.title) + '</a></h4>';
        if (result.snippet) {
          html += '<p>' + escapeHtml(result.snippet) + '</p>';
        }
        html += '</div>';
      });

      html += '</div>';
    }

    html += '</div>';
    summaryContainer.html(html);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  const searchInputs = $('.search-input');
  searchInputs.on('focus', function() {
    $(this).parent().addClass('focused');
  });

  searchInputs.on('blur', function() {
    $(this).parent().removeClass('focused');
  });
});
