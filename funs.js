function fun1()
				{
				 if(document.getElementById("c1").checked)
					{
					 document.getElementById("d1").innerHTML="<h2>Choose the Department</h2><br><input type='radio' onclick='teach()' name='m1' id='m11' value='Englsih'>English<br>";
			    		 document.getElementById("d2").innerHTML="<input type='radio' onclick='teach()' name='m1' id='m12' value='Teugu'>Telugu<br>";
					 document.getElementById("d3").innerHTML="<input type='radio' onclick='teach()' name='m1' id='m13' value='Hindi'>Hindi<br>";
					 document.getElementById("d4").innerHTML="<input type='radio' onclick='teach()' name='m1' id='m14' value='Sanskrit'>Sanskrit<br>";
					 document.getElementById("d5").innerHTML="";
					document.getElementById("teachers").innerHTML="";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
					}
				 else if(document.getElementById("c2").checked)
				        {
					 document.getElementById("d1").innerHTML="<h2>Choose the Department</h2><br><input type='radio' onclick='teach1()' name='m2' id='m21' value='maths'>Mathematics<br>";
			    		 document.getElementById("d2").innerHTML="<input type='radio' onclick='teach1()' name='m2' id='m22' value='statistics'>statistics<br>";
					 document.getElementById("d3").innerHTML="";
					 document.getElementById("d4").innerHTML="";
					 document.getElementById("d5").innerHTML="";
					 document.getElementById("teachers").innerHTML="";
					 document.getElementById("tab").innerHTML="";
					 document.getElementById("slip").innerHTML="";
					}
				 else if(document.getElementById("c3").checked)
                                 	{
					 document.getElementById("d1").innerHTML="<h2>Choose the Department</h2><br><input type='radio' onclick='teach2()' name='m3' id='m31' value='Physics'>Physics<br>";
			    		 document.getElementById("d2").innerHTML="<input type='radio' onclick='teach2()' name='m3' id='m32' value='Electronics'>Electronics<br>";
					 document.getElementById("d3").innerHTML="<input type='radio' onclick='teach2()' name='m3' id='m33' value='Chemistry'>Chemistry<br>";
					 document.getElementById("d4").innerHTML="";
					 document.getElementById("d5").innerHTML="";
					 document.getElementById("teachers").innerHTML="";
					 document.getElementById("tab").innerHTML="";
					 document.getElementById("slip").innerHTML="";
					}
				 else if(document.getElementById("c4").checked) 
                                 	{
					 document.getElementById("d1").innerHTML="<h2>Choose the Department</h2><br><input type='radio' onclick='teach3()' name='m4' id='m41' value='BBA'>BBA<br>";
			    		 document.getElementById("d2").innerHTML="<input type='radio' onclick='teach3()' name='m4' id='m42' value='Commerce'>Commerce<br>";
					 document.getElementById("d3").innerHTML="";
					 document.getElementById("d4").innerHTML="";
					 document.getElementById("d5").innerHTML="";
					 document.getElementById("teachers").innerHTML="";
					 document.getElementById("tab").innerHTML="";
					 document.getElementById("slip").innerHTML="";
					}
				 else if(document.getElementById("c5").checked)
					{
					 document.getElementById("d1").innerHTML="<h2>Choose the Department</h2><br><input type='radio' onclick='teach4()' name='m5' id='m51' value='Zoology'>Zoology<br>";
			    		 document.getElementById("d2").innerHTML="<input type='radio' onclick='teach4()' name='m5' id='m52' value='Botony'>Botony<br>";
					 document.getElementById("d3").innerHTML="<input type='radio' onclick='teach4()' name='m5' id='m53' value='E.S'>E.S<br>";
					 document.getElementById("d4").innerHTML="<input type='radio' onclick='teach4()' name='m5' id='m54' value='Bio-Tech'>Bio-Tech<br>";
					 document.getElementById("d5").innerHTML="<input type='radio' onclick='teach4()' name='m5' id='m55' value='Micro-biology'>Micro-biology<br>";
					 document.getElementById("teachers").innerHTML="";
					 document.getElementById("tab").innerHTML="";
					 document.getElementById("slip").innerHTML="";
					}
				else if(document.getElementById("c6").checked)
					{
					 document.getElementById("d1").innerHTML="";
					 document.getElementById("d2").innerHTML="";
					 document.getElementById("d3").innerHTML="";
					 document.getElementById("d4").innerHTML="";
					 document.getElementById("d5").innerHTML="";
					 document.getElementById("teachers").innerHTML="<input type='radio' onclick='teachc1()' name='mi1' id='mi11' > COMP-teacher1 <br><input type='radio' onclick='teachc1()' name='mi1' id='mi12'> COM-teacher2 <br><input type='radio' onclick='teachc1()' name='mi1' id='mi13'> COMP-teacher3 <br>";
					 document.getElementById("tab").innerHTML="";
					 document.getElementById("slip").innerHTML="";
					}
					else if(document.getElementById("c7").checked)
					{
					 document.getElementById("d1").innerHTML="<h2>Choose the Department</h2><br><input  type='radio' name='m6' id='m61' onclick='teach5()' value='UG-An' >UG-Analytical-Skills<br>";
					 document.getElementById("d2").innerHTML="<input type='radio'onclick='teach5()'name='m6' id='m62' value='UG-ss'>UG-Soft-Skills<br>";
					 document.getElementById("d3").innerHTML="";
					 document.getElementById("d4").innerHTML="";
					 document.getElementById("d5").innerHTML="";	
					 document.getElementById("teachers").innerHTML="";
					 document.getElementById("tab").innerHTML="";
					 document.getElementById("slip").innerHTML="";
					}
				}
			
			
			function fun2()
				{
				  if(document.getElementById("p1").checked)
				  {
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
				  	document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
					document.getElementById("teachers").innerHTML="";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";

				  }
				}
			function fun3()
				{
				  if(document.getElementById("p11").checked)
				  {
				  	document.getElementById("d1").innerHTML="<h2>Choose The Department</h2><br><input type='radio' onclick='teach6()' name='nk' id='N1' value='pg-an'>PG-Analytical-Skills<br>";
				  	document.getElementById("d2").innerHTML="<input type='radio' onclick='teach6()' name='nk' id='N2' value='pg-ss'>PG-Soft-Skills<br>";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
				  	document.getElementById("teachers").innerHTML="";
					document.getElementById("tab").innerHTML="";
					document.getElementById("slip").innerHTML="";
				  }
				}
			function fun()
				{
				if(document.getElementById("a1").checked)
			   { 
			     
			    document.getElementById("b1").innerHTML="<h2>Choose The Department</h2><br><input type='radio' onclick='fun1()' name='n1' id='c1' value='Languages'>Languages<br>";
			    document.getElementById("b2").innerHTML="<input type='radio' onclick='fun1()' name='n1' id='c2' value='Maths & statistics'>Maths & statistics<br>";
			    document.getElementById("b3").innerHTML="<input type='radio' onclick='fun1()' name='n1' id='c3' value='Physics'>Physical Science<br>";
			    document.getElementById("b4").innerHTML="<input type='radio' onclick='fun1()' name='n1' id='c4' value='Commerce'>Commerce<br>";
			    document.getElementById("b5").innerHTML="<input type='radio' onclick='fun1()' name='n1' id='c5' value='Science'>Life-Science<br>";
			    document.getElementById("b6").innerHTML="<input type='radio' onclick='fun1()' name='n1' id='c6' value='Computer-Science'>Computer-Science<br>";
			    document.getElementById("b7").innerHTML="<input type='radio' onclick='fun1()' name='n1' id='c7' value='UG-SDC'>UG-SDC<br>";
			    document.getElementById("b8").innerHTML="";
		 	    document.getElementById("b9").innerHTML="";
			    document.getElementById("b10").innerHTML="";
			    document.getElementById("b11").innerHTML="";
			    document.getElementById("d1").innerHTML="";
				document.getElementById("d2").innerHTML="";
				document.getElementById("d3").innerHTML="";
				document.getElementById("d4").innerHTML="";
				document.getElementById("d5").innerHTML="";
				document.getElementById("teachers").innerHTML="";
				document.getElementById("tab").innerHTML="";
				 document.getElementById("slip").innerHTML="";

				}
			else if(document.getElementById("a2").checked)
			   {
			     document.getElementById("b1").innerHTML="<h2>Choose The Department</h2><br><input type='radio' onclick='teach7()' name='n2' id='p1' value='MBA'>MBA<br>";
			     document.getElementById("b2").innerHTML="<input type='radio' name='n2' id='p2' onclick='teach7()' value='MCA&M.Sc'>MCA & M.Sc(cs)<br>";
			     document.getElementById("b3").innerHTML="<input type='radio' name='n2' id='p3' onclick='teach7()' value='M.com'>M.COM<br>";
			     document.getElementById("b4").innerHTML="<input type='radio' name='n2' id='p4' onclick='teach7()' value='Micro-Bio'>Micro-Biology<br>";
			     document.getElementById("b5").innerHTML="<input type='radio' name='n2' id='p5' onclick='teach7()' value='Bio-Te'>Bio-Technology<br>";
			     document.getElementById("b6").innerHTML="<input type='radio' name='n2' id='p6' onclick='teach7()' value='M.H.R.M'>M.H.R.M<br>";
			     document.getElementById("b7").innerHTML="<input type='radio' name='n2' id='p7' onclick='teach7()' value='Bio-ch'>Bio-Chemistry<br>";
			     document.getElementById("b8").innerHTML="<input type='radio' name='n2' id='p8' onclick='teach7()' value='Analytical-ch'>Analytical-Chemistry<br>";
			     document.getElementById("b9").innerHTML="<input type='radio' name='n2' id='p9' onclick='teach7()' value='Organ-ch'>Organic-Chemistry<br>";
			     document.getElementById("b10").innerHTML="<input type='radio' name='n2' id='p10' onclick='teach7()' value='English'>English<br>";
			     document.getElementById("b11").innerHTML="<input type='radio' name='n2' id='p11' onclick='fun3()' value='PG-SDC'>PG-SDC<br>";
			     	document.getElementById("d1").innerHTML="";
				  	document.getElementById("d2").innerHTML="";
				  	document.getElementById("d3").innerHTML="";
				  	document.getElementById("d4").innerHTML="";
				  	document.getElementById("d5").innerHTML="";
				  	document.getElementById("teachers").innerHTML="";
					  document.getElementById("tab").innerHTML="";
					  document.getElementById("slip").innerHTML="";
			   }

			}
		