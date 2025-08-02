console.log("123")
document.querySelectorAll('.foldable-title').forEach(function(title) {
                title.addEventListener('click', function() {
                    var section = this.parentElement;
                    section.classList.toggle('open');
                });
            });