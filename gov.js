maxsub=42;var theurls=new Array("http://plymouthmn.gov/redirect.aspx?url=http://{website}","http://shorelinewa.gov/redirect.aspx?url=http://{website}","http://greensboro-nc.gov/redirect.aspx?url=http://{website}","http://franklin-tn.gov/redirect.aspx?url=http://{website}","http://www.burbankca.gov/redirect.aspx?url=http://{website}","http://www.transtats.bts.gov/exit.asp?url=http://{website}","http://energy.gov/exit?url=http://{website}","http://www.nws.noaa.gov/climate/nwsexit.php?wfo=abq&url=http://{website}","http://democracy.house.gov/htbin/leave_site.pl?ln_url=http://{website}","http://www.volpe.dot.gov/cgi-bin/goodbye.cgi?url=http://{website}","http://stopstigma.samhsa.gov/redirect.aspx?URL=http://{website}","http://wassermanschultz.house.gov/htbin/leave_site.pl?ln_url=http://{website}","http://vos.noaa.gov/vosexit.php?url=http://{website}","http://www.polytrauma.va.gov/disclaimer.asp?url=http://{website}","http://www.promoteacceptance.samhsa.gov/10by10/redirect.aspx?url=http://{website}","http://www.hdac.house.gov/htbin/leave_site.pl?ln_url=http://{website}","http://mckeon.house.gov/htbin/leave_site.pl?ln_url=http://{website}","http://dreier.house.gov/htbin/leave_site?ln_url=http://{website}","http://jerrylewis.house.gov/htbin/leave_site.pl?ln_url=http://{website}","http://senweb03.senate.ca.gov/focus/outreach/sd40/sd40-redirect.asp?URL=http://{website}","http://www.standards.its.dot.gov/PageRedirect.asp?RedirectedURL=http://{website}","http://www.pcb.its.dot.gov/pageredirect.asp?redirectedurl=http://{website}","http://www.fws.gov/scripts/exit.cfm?link=http://{website}","http://www.ndbc.noaa.gov/ndbcexit.php?url=http://{website}","http://www.roc.noaa.gov/scripts/exit/osfexit.pl?url=http://{website}","http://www.weather.gov/cgi-bin/nwsexit.pl?url=http://{website}","http://www.usphs.gov/redirect.aspx?URL=http://{website}","http://water.weather.gov/ahps2/nwsexit.php?url=http://{website}","http://democrats.assembly.ca.gov/members/scripts/redirect.asp?URL=http://{website}","http://chaplain.house.gov/redirect.html?url=http://{website}","http://www.whiteriver.va.gov/exit.asp?url=http://{website}","http://www.wdtb.noaa.gov/scripts/exit/wdtbexit.pl?url=http://{website}","http://www.biometrics.gov/LeavingSite.aspx?url=http://{website}","http://www.plattsburgh.edu/php-bin/external.php?url=http://{website}","http://web.plattsburgh.edu/php-bin/external.php?url=http://{website}","http://nsf.gov/cgi-bin/good-bye?http://{website}","http://nws.noaa.gov/cgi-bin/nwsexit.pl?url=http://{website}","http://www.bluepages.anu.edu.au/help_and_resources/state_by_state/sa/outbound?url=http://{website}","http://mhin.bu.edu/leaving.cfm?ID=1&URL=http://{website}","http://transition.fcc.gov/fcc-bin/bye?http://{website}","http://www.fairfaxcounty.gov/offsite/?pg=http://{website}","http://export.gov/wcm/fragments/fl_eg_outsidelinks/redirect.asp?URL=http://{website}","http://wwwcf.fhwa.dot.gov/exit.cfm?link=http://{website}","");function geturl(){current1=parseInt(document.getElementById("currentk").value);if(current1<maxsub){currentk2=parseInt(document.getElementById("currentk").value)+1;document.getElementById("totalbl").innerHTML=currentk2;document.getElementById("statusk").innerHTML="In Process...";document.getElementById("currentk").value=currentk2;url=theurls[current1].replace("{website}",cdomain);window.open(url,"frame1");timerId=setTimeout(geturl,5000)}else{document.getElementById("statusk").innerHTML="Submission Completed"}}function beginu(){cdomain=document.getElementById("domain").value;cdomain=cdomain.replace("http://","");cdomain=cdomain.replace("www.","");geturl()}function getFlashMovieObject(a){if(window.document[a]){return window.document[a];alert(a)}if(navigator.appName.indexOf("Microsoft Internet")==-1){if(document.embeds&&document.embeds[a]){return document.embeds[a]}}else{return document.getElementById(a)}}function SendDataToFlashMovie(a,c){var b=getFlashMovieObject("predoll");b.changetop(a,c);using(a,c)}function GetXmlHttpObject(){var a=null;try{a=new XMLHttpRequest()}catch(b){try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){a=new ActiveXObject("Microsoft.XMLHTTP")}}return a}function stateChanged(){if(xmlHttp.readyState==3){tid=xmlHttp.responseText;alert(tid)}};