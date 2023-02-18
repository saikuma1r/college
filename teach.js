function teach()
			{
				if(document.getElementById("m11").checked)
				{
				 document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip()' name='j0' id='j01'> Eng-teacher1 <br><input type='radio' onclick='slip()' name='j0' id='j02'> Eng-teacher2 <br><input type='radio' onclick='slip()' name='j0' id='j03'> Eng-teacher3 <br>";
				 document.getElementById("tab").innerHTML="";
				 document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("m12").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip1()' name='j1' id='j11'> Tel-teacher1 <br><input type='radio' onclick='slip1()' name='j1' id='j12' > Tel-teacher2 <br><input type='radio' onclick='slip1()' name='j1' id='j13'> Tel-teacher3 <br>";
				}
				else if(document.getElementById("m13").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip2()' name='j2' id='j21' > hin-teacher1 <br><input type='radio' onclick='slip2)' name='j2' id='j22' > hin-teacher2 <br><input type='radio'  onclick='slip2()'name='j2' id='j23'> hin-teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";	
				}
				else if(document.getElementById("m14").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip3()' name='j3' id='j31'> san-teacher1 <br><input type='radio' onclick='slip3()' name='j3' id='j32'> san-teacher2 <br><input type='radio' onclick='slip3()' name='j3' id='j33'> san-teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
			}
			
			function teach1()
			{
				 if(document.getElementById("m21").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip4()' name='k0' id='k01' > mat-teacher1 <br><input type='radio' onclick='slip4()' name='k0' id='k02'> mat-teacher3 <br><input type='radio' onclick='slip4()'name='k0' id='k03'> mat-teacher3 <br>";
					document.getElementById("tab").innerHTML="";
				 document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("m22").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip5()' name='k1' id='k11'> stat-teacher1 <br><input type='radio' onclick='slip5()' name='k1' id='k12'> stat-teacher3 <br><input type='radio' onclick='slip5()' name='k1' id='k13'> stat-teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
			}
			
			function teach2()
			{
				if(document.getElementById("m31").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip6()' name='k2' id='k21'> phy-teacher1 <br><input type='radio' onclick='slip6()' name='k2' id='k22'> -teacher3 <br><input type='radio' onclick='slip6()' name='k2' id='k23'> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("m32").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip7()' name='k3' id='k31'> ele-teacher1 <br><input type='radio' onclick='slip7()' name='k3' id='k32'> -teacher3 <br><input type='radio' onclick='slip7()' name='k3' id='k33'> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("m33").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip8()' name='k4' id='k41'> chy-teacher1 <br><input type='radio' onclick='slip8()' name='k4' id='k42'> -teacher3 <br><input type='radio' onclick='slip8()' name='k4' id='k43'> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
			}
			
			function teach3()
			{ 
				if(document.getElementById("m41").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip9()' name='k5' id='k51'> BBA-teacher1 <br><input type='radio' onclick='slip9()' name='k5' id='k52'> -teacher3 <br><input type='radio' onclick='slip9()' name='k5' id='k53'> -teacher3 <br>";
				
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";}
				else if(document.getElementById("m42").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip10()' name='k6' id='k61'> COM-teacher1 <br><input type='radio' onclick='slip10()' name='k6' id='k62'> -teacher3 <br><input type='radio' onclick='slip10()'name='k6' id='k63'> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
			}
			
			function teach4()
			{ 
				if(document.getElementById("m51").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip11()' name='k7' id='k71'>ZOO -teacher1 <br><input type='radio' onclick='slip11()' name='k7' id='k72'> -teacher3 <br><input type='radio' onclick='slip11()'name='k7' id='k73'> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";	
				}
				else if(document.getElementById("m52").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip12()' name='k8' id='k81'> BOT-teacher1 <br><input type='radio' onclick='slip12()' name='k8' id='k82'> -teacher3 <br><input type='radio' onclick='slip12()'name='k8' id='k83'> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("m53").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip13()' name='k9' id='k91'> ES-teacher1 <br><input type='radio' onclick='slip13()' name='k9' id='k92'>> -teacher3 <br><input type='radio' onclick='slip13()' name='k9' id='k93'>> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("m54").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip14()' name='k10' id='k101'>BT-teacher1 <br><input type='radio' onclick='slip14()' name='k10' id='k102'> -teacher3 <br><input type='radio' onclick='slip14()' name='k10' id='k103'> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("m55").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip15()' name='k11' id='k111'> MB-teacher1 <br><input type='radio' onclick='slip15()' name='k11' id='k112'> -teacher3 <br><input type='radio' onclick='slip15()' name='k11' id='k113'> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
			}
			
			function teach5()
			{
					if(document.getElementById("m61").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip16()' name='k12' id='k121'>UG-AS-teacher1 <br><input type='radio' onclick='slip16()' name='k12' id='k122' > -teacher3 <br><input type='radio' onclick='slip16()' name='k12' id='k123'> -teacher3 <br>";
					document.getElementById("slip").innerHTML="";
					document.getElementById("tab").innerHTML="";
				}
				else if(document.getElementById("m62").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip17()' name='k13' id='k131'>UG-SS-teacher1 <br><input type='radio' onclick='slip17()' name='k13' id='k132'> -teacher3 <br><input type='radio' onclick='slip17()' name='k13' id='k133'> -teacher3 <br>";
					document.getElementById("slip").innerHTML="";
					document.getElementById("tab").innerHTML="";
				}
			}
			
			function teach6()
			{
				 	if(document.getElementById("N1").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip18()' name='k14' id='k141'> PG-AS-teacher1 <br><input type='radio' onclick='slip18()' name='k14' id='k142'> -teacher3 <br><input type='radio' onclick='slip18()' name='k14' id='k143'> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("N2").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip19()' name='k15' id='k151'> PG-SS-teacher1 <br><input type='radio' onclick='slip19()' name='k15' id='k152'> -teacher3 <br><input type='radio' onclick='slip19()' name='k15' id='k153'> -teacher3 <br>";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				}
			}
			
			function teach7()
			{
					if(document.getElementById("p1").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip20()' name='k16' id='k161'> MBA-teacher1 <br><input type='radio' onclick='slip20()' name='k16' id='k162'> -teacher3 <br><input type='radio' onclick='slip20()' name='k16' id='k163'> -teacher3 <br>";
					document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("p2").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip21()' name='k17' id='k171'> MCA-teacher1 <br><input type='radio' onclick='slip21()' name='k17' id='k172'> -teacher3 <br><input type='radio' onclick='slip21()'name='k17' id='k173'> -teacher3 <br>";
					document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("p3").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip22()' name='k18' id='k181'> M.COM-teacher1 <br><input type='radio' onclick='slip22()' name='k18' id='k182'> -teacher3 <br><input type='radio' onclick='slip22()' name='k18' id='k183'> -teacher3 <br>";
					document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("p4").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip23()' name='k19' id='k191'> MB-teacher1 <br><input type='radio' onclick='slip23()' name='k19' id='k192'> -teacher3 <br><input type='radio' onclick='slip23()' name='k19' id='k193'> -teacher3 <br>";
					document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("p5").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip24()' name='k20' id='k201'> BT-teacher1 <br><input type='radio' onclick='slip24()' name='k20' id='k202'> -teacher3 <br><input type='radio' onclick='slip24()' name='k20' id='k203'> -teacher3 <br>";
					document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("p6").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip25()' name='k21' id='k211'> MHRM-teacher1 <br><input type='radio' onclick='slip25()' name='k21' id='k212'> -teacher3 <br><input type='radio' onclick='slip25()' name='k21' id='k213'> -teacher3 <br>";
					document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("p7").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip26()' name='k22' id='k221'> BC-teacher1 <br><input type='radio' onclick='slip26()' name='k22' id='k222'> -teacher3 <br><input type='radio' onclick='slip26()' name='k22' id='k223'> -teacher3 <br>";
					document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("p8").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip27()' name='k23' id='k231'> AC-teacher1 <br><input type='radio' onclick='slip27()' name='k23' id='k232'> -teacher3 <br><input type='radio' onclick='slip27()' name='k23' id='k233'> -teacher3 <br>";
					document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("p9").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip28()' name='k24' id='k241'> OC-teacher1 <br><input type='radio' onclick='slip28()' name='k24' id='k242'> -teacher3 <br><input type='radio' onclick='slip28()'name='k24' id='k243'> -teacher3 <br>";
					document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
				}
				else if(document.getElementById("p10").checked)
				{
					document.getElementById("teachers").innerHTML="<input type='radio' onclick='slip29()' name='k25' id='k251'> Englsih-teacher1 <br><input type='radio' onclick='slip29()' name='k25' id='k252'> -teacher3 <br><input type='radio' onclick='slip29()' name='k25' id='k253'> -teacher3 <br>";
					document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
				}			
			}