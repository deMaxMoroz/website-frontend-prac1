document.querySelector('.button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#learn-more').scrollIntoView({
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv = document.getElementById('alienVault');
    
    clickableDiv.addEventListener('click', function() {
        window.open('https://cybersecurity.att.com/products/ossim/download', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv = document.getElementById('wazuh');
    
    clickableDiv.addEventListener('click', function() {
        window.open('https://wazuh.com/', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv = document.getElementById('mozDef');
    
    clickableDiv.addEventListener('click', function() {
        window.open('https://github.com/mozilla/MozDef', '_blank');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv = document.getElementById('securityOnion');
    
    clickableDiv.addEventListener('click', function() {
        window.open('https://securityonionsolutions.com/software', '_blank');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv = document.getElementById('ossec');
    
    clickableDiv.addEventListener('click', function() {
        window.open('https://www.ossec.net/docs/index.html', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv = document.getElementById('ptbestsiem');
    
    clickableDiv.addEventListener('click', function() {
        window.open('https://www.ptsecurity.com/ru-ru/products/mpsiem/', '_blank');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv = document.getElementById('splunk');
    
    clickableDiv.addEventListener('click', function() {
        window.open('https://www.splunk.com/en_us/products/enterprise-security.html', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv = document.getElementById('arcSight');
    
    clickableDiv.addEventListener('click', function() {
        window.open('https://www.opentext.com/products/arcsight-enterprise-security-manager', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv = document.getElementById('suricata');
    
    clickableDiv.addEventListener('click', function() {
        window.open('https://suricata.io/', '_blank');
    });
});