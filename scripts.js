document.getElementById('expandButton').addEventListener('click', function() {
    var hiddenContent = document.getElementById('hiddenContent');
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
    } else {
        hiddenContent.style.display = 'none';
    }
});
