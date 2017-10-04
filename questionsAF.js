
var le = '&le;', ge = '&ge;', lt = '&#60;', gt = '&#62;';

var questions = 

	{

		/* 1 */
		1 : {

			'questionStatement' : "<p>WALL-E is trapped by a group of AUTOs. In order to escape he has to answer a logical question.<br>There are <b>N</b> EVEs out of which some are on the ground and some are flying. After one hour some of them will land (come on ground) according to this rule: Only the EVEs who had both their neighbours on ground in the previous hour will land.<br>WALL-E has to tell the number of EVEs sitting and standing after M hours.<br>(EVEs at corners have only one neighbour.)<br>(If for any EVE, either of her neighbours are not on ground in the previous hour then she will fly.) </p><h4>Input format</h4><p>First line contains <b>N, M</b> (separated by a space) denoting the number of EVEs and hours,respectively.<br>Second line contains <b>N</b> integers (space separated) either <b>0</b> or <b>1</b> depending on whether EVE is flying or on ground respectively.</p><h4>Input Constraints</h4><ul><li>2 " + le + " N " + le + " 100</li><li>0 " + le + " M " + le + " 500</li></ul><h4>Output format</h4><p>Output <b>N</b> space separated integers denoting the state of the EVEs.</p><h4>Sample Input 1</h4><code>3 4<br>1 1 1</code><h4>Sample Output </h4><code>1 1 1</code><h4>Sample Input 2</h4><code>6 2<br>1 0 1 1 0 0</code><h4>Sample Output </h4><code>1 0 0 0 0 0</code><h4>Explanation</h4></p>In the first example since all EVEs are flying, none will land and their state remains the same.<br>In the second example: In the first hour the on ground and flying order will be: 0 1 0 0 0 0. 1st and 6th EVE have no neighbour on ground, so they will fly. 2nd EVE has both her neighbours on ground in the previous hour so she will land(come on ground). 3rd, 4th and 5th EVEs have only one neighbour on ground, so they will fly. In the second hour, the on ground and flying order will be: 1 0 0 0 0 0 as only one EVE has her neighbours on ground in the previous hour. <br>(Assume only one neighbour for first and last eve)<br></p><h4>Test Case</h4><code>25 4 <br>1 1 1 0 1 1 0 0 1 1 1 0 0 1 1 0 1 1 1 0 1 1 1 0 1</code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "641ad064e4ef476143f294895376001427a937c52ee14c6f6596ba9600f3080a"

		},

		/* 2 */
		2 : {

			'questionStatement' : "<p> Bruce Wayne and Tony Stark meet to decide who is smarter. After two hours of pretty much equal face-offs, Bruce comes up with what he feels is his trump card. <br>Calculate the value of <b> <code>(1<sup>n</sup> + 2<sup>n</sup> + 3<sup>n</sup> + 4<sup>n</sup>)mod 5</code> </b> , he says. <br>That's so simp-- <br>But <b>n</b> can't fit in any of these marvel data types. They go up to 10 <sup> 10 <sup> 15 </sup> </sup> . That's a lot of zeroes. <br>Tony is stumped. Help him out.</p><h4> Input Format </h4><p> A single number <b> n </b></p><h4> Input Constraints </h4><p> 0 " + le + " <b> n </b> " + le + " 10 <sup> 10 <sup> 15 </sup> </sup></p><h4> Output Format </h4><p> The value of the expression without any leading zeroes.</p><h4> Sample Input </h4><code> 4</code><h4> Sample Output </h4><code> 4</code><h4> Explanation </h4><p> <code> x mod y </code> is the remainder obtained with x is divided by y. <br><code> (1<sup>4</sup> + 2<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup>) mod 5 </code> <br>=<code> (1 + 16 + 81 + 256) mod 5 </code> <br>=<code> 354 mod 5 </code> <br>=<code> 4 </code>.</p><h4> Test Input </h4><code> 124356983594583453458888889</code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"

		},

		/* 3 */
		3 : {

			'questionStatement' : "<p>Bruce and his girlfriend, Selina are going to have a promenade. They are walking along the straight road which consists of segments placed one by one. Before walking Bruce and Selina stay at the beginning of the first segment, they want to achieve the end of the last segment. There are few problems:</p> <p>1. At the beginning Bruce should choose constant integer - the velocity of moving. It can't be changed inside one segment. <br>2. The velocity should be decreased by at least 1 after achieving the end of some segment.<br>3. There is exactly one shop on each segment.</p><p> Each shop has an attractiveness. If it's attractiveness is <b>W</b> and Bruce and Selina move with velocity <b>V</b> then if <b>V < W</b> Selena will run away into the shop and the promenade will become ruined. </p><p>Bruce doesn't want to ruin the promenade in such a way, so you should find the minimal possible velocity at the first segment to satisfy all conditions.</p><h4>Input Format:</h4><p>The first line of the input contains an integer <b>T</b> denoting the number of test cases. The description of <b>T</b> test cases follows.<br>The first line of each test case contains a single integer <b>N</b> denoting the number of segments. The second line contains <b>N</b> space-separated integers <b>W<sub>1</sub>,W<sub>2</sub>,...,W<sub>n</sub></b> denoting the attractiveness of shops.</p><br><h4>Output Format:</h4><p>For each test case, output a single line containing the minimal possible velocity at the beginning.</p><br><h4>Constraints:</h4><ul><li>1 " + le + " T " + le + " 10</li><li>1 " + le + " N " + le + " 10<sup>5</sup></li><li>1 " + le + " W<sub>i</sub> " + le + " 10<sup>6</sup></li></ul><h4>Sample Input:</h4><code>2<br>5<br>6 5 4 3 2<br>5<br>3 4 3 1 1<br></code><h4>Sample Output:</h4><code>6<br>5<br></code><h4>Explanation:</h4><p>In the first example, if we choose velocity 6, on the first step we have 6 >= 6 everything is OK, then we should decrease the velocity to 5 and on the 2nd segment we'll receive 5 >= 5, again OK, and so on.<br>In the second example we choose velocity 4, the promenade will be ruined on the 2nd step (we should decrease our velocity, so the maximal possible will be 3 which is less than 4).</p><h4>Test Case:</h4><p>1<br>30<br>28 3 6 16 5 19 7 5 22 8 4 19 2 21 7 10 23 4 15 10 10 10 5 8 12 9 3 3 13 5<br></p>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "3d914f9348c9cc0ff8a79716700b9fcd4d2f3e711608004eb8f138bcba7f14d9"

		},

		/* 4 */
		4 : {

			'questionStatement' : "<p>Hal Jordan is very close to catching Sinestro red-handed. He finds a trail of stones with numbers on them that leads him to Sinestro. He starts following the trail and notices that two consecutive stones have a difference of either <b>a</b> or <b>b</b>. Jordan needs to guess the value of the last stone. Given that the number on the first stone was <b>0</b>, find all the possible values for the number on the last stone.<br><u>Note:</u> The numbers on the stones are in increasing order. </p><h4>Input:</h4><p>The first line contains an integer <b>T</b>, i.e. the number of test cases. T test cases follow; each has 3 lines. The first line contains <b>n</b>(the number of stones). The second line contains <b>a</b>, and the third line contains <b>b</b>.</p><h4>Output:</h4><p>Space-separated list of numbers which are the possible values of the last stone in <i>increasing order</i>.</p><h4>Constraints:</h4><ul><li>1 " + le + " T " + le + " 10</li><li>1 " + le + " n, a, b " + le + " 10<sup>3</sup></li></ul><h4>Sample Input:</h4><code>2<br>3 <br>1<br>2<br>4<br>10<br>100<br></code><h4>Sample Output:</h4><code>2 3 4<br>30 120 210 300<br></code><h4>Explanation:</h4><p>All possible series for the first test case are given below: <ol><li>0,1,<b>2</b></li><li>0,1,<b>3</b></li><li>0,2,<b>3</b></li><li>0,2,<b>4</b></li></ol>Hence the answer 2 3 4.Series with different number of final steps for second test case are the following:<ol><li>0, 10, 20, <b>30</b></li><li>0, 10, 20, <b>120</b></li><li>0, 10, 110, <b>120</b></li><li>0, 10, 110, <b>210</b></li><li>0, 100, 110, <b>120</b></li><li>0, 100, 110, <b>210</b></li><li>0, 100, 200, <b>210</b></li><li>0, 100, 200, <b>300</b></li></ol>Hence the answer 30 120 210 300. </p><h4>Test Case:</h4><code>1<br>15<br>2989<br>53<br></code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "ac4be91d898ccef5744dfd7b8cdb5d7144c24f3cfc51e680c5364b7f5ed3da5c"

		},

		/* 5 */
		5 : {

			'questionStatement' : "<p>The number of villains on planet earth has increased drastically. The Justice League is facing problems in defending Earth against these villains. To overcome this problem, Batman decides to hold a 'Best Superhero Tag-Team Tournament'. It is open for all rookie superheroes. The winners will become a part of Justice League after some special training from Green Lantern. Each rookie will participate on his own. The goal of the tournament is to create a team of two superheroes.<br><b>N</b> rookies participated in the tournament and each of them had to perform <b>M</b> tasks. Each rookie either completed the task or he didn't. On the basis of these results, Batman has to make a team of two such that the two of them together can perform maximum number of tasks. Also, he has to determine how many such teams are possible.<br>Suppose a, b and c are three different people, then (a,b) and (b,c) are counted as two different teams.<br></p><h4>Input:</h4><p>The first line contains two integers, <b>N</b> and <b>M</b>, separated by a single space, where <b>N</b> represents the number of rookies who participated, and <b>M</b> represents the number of tasks. N lines follow.Each line contains a binary string of length <b>M</b>. If the i<sup>th</sup> line's j<sup>th</sup> character is 1, then the i<sup>th</sup> rookie was able to perform the j<sup>th</sup> task; else, he wasn't.</p><h4>Output:</h4><p>Print the sum of the maximum number of tasks a 2-person team can perform and the number of 2-person teams that can perform the maximum number of tasks.</p><h4>Constraints:</h4><ul><li>2 " + le + " N " + le + " 500</li><li>1 " + le + " M " + le + " 500</li></ul><h4>Sample Input:</h4><code>4 5<br>10101<br>11100<br>11010<br>00101<br></code><h4>Sample Output:</h4><code>7<br></code><h4>Explanation:</h4><p><i>(1, 3)</i> and <i>(3, 4)</i> can perform all the <i>5</i> tasks. So the maximum tasks a 2-person team can perform is <i>5</i>, and only <i>2</i> teams can achieve this.</p><h4>Test Case:</h4><code>10 8<br>11100011<br>11001100<br>10101010<br>01110011<br>11010101<br>01100110<br>10010111<br>10100001<br>00110011<br>11010101<br></code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"

		},

		/* 6 */
		6 : {

			'questionStatement' : "<p>During a mission, Thor and Shazam found a weapon called 'The Lightning Bolt'. It was a very powerful weapon and had the power to throw destructive lightning bolts. The both had an argument about who would keep 'The Lightning Bolt'. To resolve the dispute, Spider-Man came up with a game.<br>As a part of the game, N trees, in straight row, are numbered randomly and each tree has a distinct number.<br>The rules are as follows-<br><p><b>1.</b> Thor always plays first and the two players move in alternating turns.<br><b>2.</b> In a single move, a player chooses the tree with the maximum number and destroys using 'The Lightning Bolt'.  But due to the immense power of the lightning bolt, all the other trees to its right are also destroyed. For example, if the are numbered 2 3 5 4 1, then after one turn, the trees remaining are 2 3 because 5 is the maximum number and all the trees to its right will be destroyed along with it. The game continues in similar way where each player takes turn and destroys the tree with maximum number along with all the trees to its right. <br><b>3.</b> The first player who is unable to make a move loses the game.</p><p>Thor and Shazam play G games. Given the initial numbering of trees for each game, can you find and print the name of the winner on a new line? If Thor wins, print THOR and if Shazam wins, print SHAZAM.<br></p><h4>Input:</h4><p>The first line contains a single integer denoting <b>G</b> (the number of games). The 2*g subsequent lines describe each game array over two lines:<br>The first line contains a single integer, N , denoting the number of trees.<br>The second line contains N distinct space-separated integers describing the numbering of trees <b>t<sub>1</sub>, t<sub>2</sub>, t<sub>3</sub>, ......, t<sub>n</sub></b>.</p><h4>Output:</h4><p>The output is an array of the names of the winner in a single line.</p><h4>Constraints:</h4><ul><li>1 " + le + " G " + le + " 100</li><li>1 " + le + " N " + le + " 10<sup>5</sup></li><li>1 " + le + " t<sub>i</sub> " + le + " 10<sup>9</sup></li></ul><h4>Sample Input:</h4><code>2<br>5<br>5 2 6 3 4<br>2<br>3 1<br></code><h4>Sample Output:</h4><code>SHAZAM THOR</code><h4>Explanation:</h4><p>Thor and Shazam play the following two games:<br><u>Example case 1.</u><br>Initially, the trees are numbered like this: <b>5 2 6 3 4</b><br>In the first move, Thor removes <b>6</b> and all the trees to its right, resulting in: <b>5 2</b><br>In the second move, Shazam removes <b>5</b> and all the trees to its right.<br>At this point, all the trees are destroyed and Thor cannot make any more moves. This means Shazam wins, so we print <b>SHAZAM</b><br><u>Example case 2.</u><br>In the first move, Thor removes <b>3</b> and all the trees to its right. As there are no trees left for Shazam to make a move, Thor wins and we print <b>THOR</b><br></p><h4>Test Case:</h4><code>5<br>4<br>3 6 2 8<br>5<br>2 18 11 1 10<br>6<br>27 13 15 21 19 8<br>7<br>39 9 13 24 33 2 20<br>8<br>22 30 4 47 17 29 10 40<br></code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "ae1cdd911349766661dc3a2d63c86f2b56bf3be7bb798c4f88d526b0afb99967"

		},

		/* 7 */
		7 : {

			'questionStatement' : "<p>Magneto is chasing Hydra scientists. The scientists are travelling by different trains. Each train is represented as an interval <b>[a<sub>i</sub>,b<sub>i</sub>]</b>. Magneto intends to destroy all the trains in which the scientists are travelling. A train is destroyed if a dynamite is placed at a point <b>p</b> within its interval. <b>(a<sub>i</sub> " + le + " p " + le + " b<sub>i</sub>)</b><br>Determine the minimum number of dynamites required to destroy all trains.<br>(The trains are running on multiple tracks.) </p><h4>Input format</h4><p>First line contains an integer <b>N</b>, denoting number of trains.<br>Next <b>N</b> lines contain two spaced integers <b>a<sub>i</sub> and b<sub>i</sub></b> denoting train coordinates.</p><h4>Input Constraints</h4><ul><li>1 " + le + " N " + le + " 100</li><li>0 " + le + " a<sub>i</sub> " + le + " b<sub>i</sub> " + le + " 500</li></ul><h4>Output format</h4><p>Output the minimum number of dynamites required. (Integer value)</p><h4>Sample Input</h4><code>4 <br>1 4 <br>2 7 <br>8 10 <br>12 15</code><h4>Sample Output </h4><code>3</code><h4>Explanation</h4></p>There are 4 trains. [1,4], [2,7], [8,10], [12,15]. At least 3 dynamites will be needed.A possible solution is to place dynamites at p=3, p=9, p=13. </p><h4>Test Case</h4><code>15 <br>43 71 <br>7 20<br>15 31<br>75 120<br>211 253<br>40 44<br>134 141<br>34 37<br>90 134<br>2 4<br>142 192<br>200 205<br>4 9<br>54 60<br>203 229</code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"

		},

		/* 8 */
		8 : {

			'questionStatement' : "<p> Peter Parker has homework today. <br>For an element <b> i </b> from an array of length <b> n </b>, <b> prefix(i) </b> is defined as the sum of the first <b> i </b> elements. Similarly, <b> suffix(i) </b> is the sum of the last <b> n - i - 1 </b> elements. He's supposed to find the least value of the index <b> i </b> for the least value of <b> suffix(i) + prefix(i). </b> <br>As he wraps his mind around it, he gets word that the Green Goblin is back and terrorizing his city. As he leaves to be the friendly neighborhood superhero, he asks you to handle the homework for him. </p><h4> Input format </h4> <p> An integer <b> n </b> followed by <b> n </b> elements of the array numbered from <b> A<sub>1</sub> to A<sub>n</sub>. </b> </p><h4> Input constraints </h4> <ul> <li> 0 " + le + " <b> n </b> " + le + " 10<sup>5</sup> </li><li> 0 " + le + " <b> A <sub>i</sub> </b> " + le + " 10<sup>5</sup> </li></ul> <h4> Output format </h4> <p> A single line containing the answer. </p><h4> Sample Input </h4> <code> 4<br>2 1 3 1 </code> <h4> Sample Output </h4> <code> 2 </code> <h4> Test Input </h4> <code> 22<br> 23485 38474 23599 28742 97856 48690 34566 23456 91345 55273 94514 54212 54612 67955 67231 78123 61985 42897 19832 49517 39868 71451 </code> ",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "9400f1b21cb527d7fa3d3eabba93557a18ebe7a2ca4e471cfe5e4c5b4ca7f767"

		},

		/* 9 */
		9 : {

			'questionStatement' : "<p>To prove his intelligence, given a string <b>S</b> consisting of only <b>1s</b> and <b>0s</b>, Professor X needs to find the number of substrings which start and end both in <b>1</b>.</p><p>In this problem, a substring is defined as a sequence of continuous characters <b>S<sub>i</sub>, S<sub>i+1</sub>, ..., S<sub>j</sub></b> where <b>1</b> " + le + " <b>i</b> " + le + " <b>j</b> " + le + " <b>N</b>.</p><h4>Input:</h4><p>First line contains <b>T</b>, the number of testcases. Each test case consists of <b>N</b>(the length of string) in one line and string in second line.</p><h4>Output:</h4><p>For each test case, print the required answer in one line.</p><h4>Constraints:</h4><ul><li>1 " + le + " T " + le + " 10<sup>5</sup></li><li>1 " + le + " N " + le + " 10<sup>5</sup></li><li>Sum of <b>N</b> over all testcases " + le + " 10<sup>5</sup></li></ul><h4>Sample Input:</h4><code>2<br>4<br>1111<br>5<br>10001<br></code><h4>Sample Output:</h4><code>10<br>3<br></code><h4>Explanation:</h4>In the first test case, all substrings satisfy.<br>In the second example, three substrings S[1,1], S[5,5] and S[1,5] satisfy.</p><h4>Test Case:</h4><code>1<br>66<br>111000010001010100100001111000010101010101000110001111101010010001<br></code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "5f2703a5211db19a9020f7443f6a440fbc95cda90b7c2d53912f5ce47d050056"

		},

		/* 10 */
		10 : {

			'questionStatement' : "<p>Welcome to the 24th Century! Things have changed a lot in the last thousand years. Captain Kirk and his team are still on their mission to fight Nero, from destroying the Federation. However, now, Nero is in possession of a number of planets and its inhabitants. And even more amazingly, there are many parallel universes which were captured!</p><p>There is an infinite number of parallel universes, each of which has <b>N</b> planets. The planets inside a single universe are numbered from 1 to <b>N</b>. The planets inside a single universe are connected with each other by <b>N-1</b> bi-directional tunnels in such a way that there's a path between any pair of planets within a single universe. The network of tunnels in every universe is the same. That is, if there is a tunnel between planets q<sub>1</sub> and q<sub>2</sub> in some universe, then there is a tunnel between planets q<sub>1</sub> and q<sub>2</sub> in every universe.</p><p>The universes are numbered starting from 1, while the planets in a single universe are numbered from 1 to <b>N</b>. Therefore a particular planet can be uniquely determined by its planet number inside the particular universe, and the number of the universe that it belongs to.There are also <b>M</b> special bi-directional teleports that let you travel from one planet to another, and these could even be across different universes. Each teleport is defined by 4 numbers, <b>p<sub>1</sub>, u<sub>1</sub>, p<sub>2</sub>, u<sub>2</sub></b>. This means that it can teleport you from the <b>p<sub>1</sub></b><sup>th</sup> planet in <b>u<sub>1</sub></b><sup>th</sup> universe to the <b>p<sub>2</sub></b><sup>th</sup> planet in <b>u<sub>2</sub></b><sup>th</sup> universe and also vice-versa.All tunnels and special teleports take 1 unit of time to pass through.Captain Kirk wants to find the shortest distance between two places. He has <b>Q</b> such queries that need to be answered. Try to help him with these.</p><h4>Input:</h4><p>The first line contains three integers, <b>N</b>, <b>M</b> and <b>Q</b>, which denote the number of planets in a single universe, the number of special teleports, and the number of queries, respectively.<br>The next <b>N - 1</b> lines describe the tunnels which connect planets inside a universe. Each line has two integers denoting the labels of the planets connected by the tunnel.<br>The next <b>M</b> lines describe the special teleports, with each line containing 4 integers: <b>p<sub>1</sub>, u<sub>1</sub>, p<sub>2</sub>, u<sub>2</sub></b> as described above.<br>The next <b>Q</b> lines describe the queries. Each line contains four integers <b>p<sub>1</sub>, u<sub>1</sub>, p<sub>2</sub>, u<sub>2</sub></b> and this means that you have to find the length of a shortest path between the <b>p<sub>1</sub></b><sup>th</sup> planet in <b>u<sub>1</sub></b><sup>th</sup> universe and the <b>p<sub>2</sub></b><sup>th</sup> planet in <b>u<sub>2</sub></b><sup>th</sup> universe.</p><h4>Output:</h4><p>For each query output its answer in a new line. If it's possible to reach one planet from the other, then output the shortest distance between them. Otherwise, output 'impossible'. (without quotes)</p><h4>Constraints:</h4><ul><li>1 " + le + " N " + le + " 300,000</li><li>1 " + le + " M " + le + " 100,000</li><li>1 " + le + " Q " +  le + " 10</li><li>1 " + le + " p<sub>1</sub>,p<sub>2</sub> " + le + " N</li><li>The whole graph (including both tunnels and special teleports) has no multi-edges or loops.</li></ul><h4>Sample Input:</h4><code>4 1 8<br>1 2<br>1 3<br>3 4<br>1 30 4 30<br>1 30 3 30<br>1 30 4 30<br>1 53 3 30<br>1 53 4 30<br>1 13 2 30<br>1 30 3 14<br>2 14 4 14<br>2 30 4 30<br></code><h4>Sample Output:</h4><code>1<br>1<br>impossible<br>impossible<br>impossible<br>impossible<br>3<br>2<br></code><h4>Explanation:</h4><p>Note that there can be teleports between two planets of the same universe. As example, the only teleport in this test case is between the first and fourth planets of the 30<sup>th</sup>universe.</p><h4>Test Case:</h4><code>3 3 1<br>1 2<br>2 3<br>1 1 1 2<br>3 3 3 2<br>1 2 3 3<br>3 1 1 3<br></code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"

		},

		/* 11 */
		11 : {

			'questionStatement' : "<p>Optimus Prime has a problem - he likes a girl but she has <b>32</b> secrets and <b>N</b> friends (also girls).<br>Prime has enumerated each girl from <b>1</b> to <b>N</b>, Prime's crush has the number <b>1</b>.<bt>Now he consider all girls as nodes of a directed graph. If one girl has an edge directed towards another girl, the former tells all the secrets she knows to the latter. Edges are oriented, so if one girl is sharing secrets with another, it doesn't imply the same relation in the reverse direction. Also, there are no cycles in the graph.<br>Each girl (except Prime's crush) has only one edge emanating from her, or doesn't have any edges emanating from her at all. Each girl listens to at most one girl. In other words, for each girl, there is only one girl who reveals secrets to her, or there are no such girls at all. Each edge has two integers assigned to it, specifying the <i>range of interest</i>. If girl <b>A</b> knows secrets in the range <b>[10-20]</b> and an edge directed towards girl <b>B</b> with a range of interest <b>[2-15]</b> then girl <b>B</b> will know secrets in the range <b>[10-15]</b>, which is, evidently, an intersection of the range of secrets and the interest range.<br>Prime's crush has all the <b>[1-32]</b> secrets, other girls just listen to her and then gossip around (share those secrets). If a girl doesn't have an edge emanating from her, she tells all the secrets she knows to Prime.<br>Prime can perform operations of the following kind: take some edge, and extend its range of interest by one (to the left or the right). He wants to know the minimal number of operations he needs to perform in order to collect all the secrets.</p><h4>Input:</h4><p><ol><li>The first line contains two integers <b>N</b> and <b>M</b> denoting the number of girls and ribs appropriately.</li><li>Each of next <b>M</b> lines describe an edge, and contains four integers <b>i, j, l, r</b> meaning that there is an oriented edge from <b>i</b> to <b>j</b> with a range of interest <b>[l-r]</b>.</li></ol></p><h4>Output:</h4><p>In a single line, output a single integer: the answer.</p><h4>Constraints:</h4><ul><li>1 " + le + " N, M " + le + " 10<sup>5</sup></li><li>1 " + le + " i < j " + le + " N</li><li>1 " + le + " l " + le + " r " + le + " 32</li></ul><h4>Sample Input:</h4><code>5 4<br>1 2 10 15<br>1 3 10 16<br>2 4 1 1<br>3 5 10 15<br></code><h4>Sample Output:</h4><code>50</code><h4>Explanation:</h4><p>Without any changes made by Prime, we will have the following knowledge propagation:Girl <b>1</b> knows <b>[1-32]</b>.<br>Girl <b>2</b> knows <b>[10-15]</b> (intersection of <b>[1-32]</b> and <b>[10-15]</b>).<br>Girl <b>3</b> knows <b>[10-16]</b> (intersection of <b>[1-32]</b> and <b>[10-16]</b>).<br>Girl <b>4</b> knows <b>[]</b> (intersection of <b>[10-15]</b> and <b>[1-1]</b>).<br>Girl <b>5</b> knows <b>[10-15]</b> (intersection of <b>[10-16]</b> and <b>[10-15]</b>).<br>So Prime can collect secrets <b>[10-15]</b> only.<br>Here is the solution:<br>1. Change <b>1 2 10 15</b> to <b>1 2 1 15</b> (by applying the operation <b>9</b> times).<br>2. Change <b>2 4 1 1</b> to <b>2 4 1 9</b> (by applying the operation <b>8</b> times).<br>3. Change <b>1 3 10 16</b> to <b>1 3 10 32</b> (by applying the operation <b>16</b> times).<br>3. Change <b>3 5 10 15</b> to <b>1 3 10 32</b> (by applying the operation <b>17</b> times).<br>Now, all secrets in the range <b>[1-9]</b> will go through <b>1-2-4</b> and all secrets in the range <b>[10-32]</b> will go through <b>1-3-5</b>, finally reaching Prime.<br>And the total cost is <b>50</b>.</p><h4>Test Case:</h4><code>10 8<br>1 2 10 15<br>2 4 5 6<br>3 4 1 7<br>1 5 17 26<br>7 10 23 32<br>6 9 1 9<br>5 8 2 21<br>4 7 8 9<br></code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "86e50149658661312a9e0b35558d84f6c6d3da797f552a9657fe0558ca40cdef"

		},

		/* 12 */
		12 : {

			'questionStatement' : "<p>Tony Stark gives you a book with <b>N</b> pages. The pages are numbered from <b>1</b> to <b>N</b>.<br>Stark randomly selects a <i>Secret Digit</i> from <b>0</b> to <b>9</b>. Now he asks you to open one page of the book without looking at the book. You win the game if that page number contains the <i>Secret Digit</i>. For example if the <i>Secret Digit</i> is 8, then 8, 80, 1238213, 98 are all winning pages and 9, 90, 1239123 are loosing pages.<br>What is the probability of winning, if both Starks's choice and your choice has uniform distribution?<br></p><h4>Input:</h4><p>The first line of input contains integer <b>T</b>, denoting the number of test cases.<br>Each test case consists of a single line with integer <b>N</b>.</p><h4>Output:</h4><p>For each test case, output the required probability as a decimal with upto two digits of precision.</p><h4>Constraints:</h4><ul><li>1 " + le + " T " + le + " 10000</li><li>1 " +  le + " N " + le + " 10<sup>17</sup></li></ul><h4>Sample Input:</h4><code>2<br>1<br>5<br></code><h4>Sample Output:</h4><code>0.10<br>0.10<br></code><h4>Explanation:</h4><p>Stark can choose any <i>Secret Digit</i> from <b>0</b> to <b>9</b>. But you can only open page with number <b>1</b>. Probability that the <i>Secret Digit</i> is <b>1</b> after you opened the page with number <b>1</b> is <b>1/10</b>.</p><h4>Test Case:</h4><code>1<br>50238<br></code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "b1188979876eef1d21d37d518c0805a03607abae10768863218cd66089c92e02"

		},

		/* 13 */
		13 : {

			'questionStatement' : "<p>Aquaman and Flash are practicing combat. They are practicing in a <b>N x N</b> square grid. The cells of the grid are given values randomly. They practice in turns (Aquaman always goes first). In each turn, one of them calls out a number in the <b>range[1,N]</b> which neither of them has called before. Calling a number <b>i</b>, blocks row <b>i</b> and column <b>i</b> for the caller. <br>At the end, scores are calculated. A combatant gets the value of cell <b>(i, j)</b> only if he had called both <b>i</b> and <b>j</b> at some point during practice. The goal is to score as high as possible. Both Aquaman and Flash play optimally.<br>Calculate their scores given a grid of size N x N.</p><h4>Input format</h4><p>First line contains <b>N</b> - the grid size.<br>The next N lines contain description of the grid, i.e. the values of cells.</p><h4>Input Constraints</h4><ul><li>1 " + le + " N " + le + " 100</li><li>0 " + le + " value of cell(i,j) " + le + "10<sup>9</sup></li></ul><h4>Output format</h4><p>Output the score of Aquaman and Flash respectively. (Separated by a space)</p><h4>Sample Input</h4><code>2<br>4 1<br>1 8</code><h4>Sample Output </h4><code>8 4</code><h4>Explanation</h4></p>Aquaman calls 2. Flash has no choice but to call 1. Cell(1, 1) goes to Flash because he called 1, similarly cell(2, 2) goes to Aquaman. Cell (1, 2) and (2, 1) belong to no one because neither of them have both 1 and 2. Hence final scores are 8 and 4 respectively.</p><h4>Test Case</h4><code>6<br>3 4 23 11 21 75<br>87 24 19 34 51 16<br>32 54 45 8 9 99<br>12 81 42 65 48 1<br>67 13 59 72 2 0<br>38 55 66 73 14 94</code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "72e6e30cb123b41d3decf674d63b7d05a8ad0cf6594ace92d171739a622b77a9",

		},

		/* 14 */
		14 : {

			'questionStatement' : "<p> Metal Knight, from the One Punch Man universe has decided to take his robots out for a weapons test. He chooses a <b>nxn</b> field and shoots exactly <b>m</b> weapons into it. <br>Each of his weapons is targeted at a particular cell <b>x,y</b> and has a characteristic strength <b>w</b>. First it affects the cell <b>x,y</b> with power <b>w</b>, then it affects yet-unaffected cells adjacent to recently affected cells with power equal to the last power decreased by <b>1</b>, and continues this process until the power becomes <b>0</b>. <br>Given the size of the study area and the coordinates of the weapons, find the maximum damage that all his weapons can cause in the field.</p><h4> Input Format </h4><p> The first line has an integer <b> n </b> that represents the size of the field. The upper left corner has coordinates <code><b> 0,0 </b></code> and bottom right has <code><b> n-1,n-1 </b></code>. <br>The next line has an integer <b> m </b>, that represents the number of weapons fired. Each of the following <b> m </b> lines has coordinates <b> x,y </b> and power <b> w </b></p><h4> Input Constraints </h4><ul> <li> 5 " + le + " n " + le + " 30 </li><li> 1 " + le + " m " + le + " 300 </li><li> 0 " + le + " x, y " + le + " n - 1 </li><li> 1 " + le + " w " + le + " 100 </li><li> The weapons may be fired onto the same spot. </li></ul><h4> Output Format </h4><p> Print a single integer indicating the maximum damage caused by the weapons.</p><h4> Sample Input 1 </h4><code> 5 <br>1 <br>2 3 4 <br></code><h4> Sample Output 1 </h4><code> 4</code><h4> Explanation </h4><code>1 2 2 2 2 <br>1 2 3 3 3 <br>1 2 3 <b>4</b> 3 <br>1 2 3 3 3 <br>1 2 2 2 2 <br></code><p> We can see that the maximum damage is at the point where the weapon lands and the further you get from ground zero, the lower the damage gets. Ground zero is marked in bold.</p><h4> Sample Input 2 </h4><code> 5 <br>2 <br>1 2 2 <br>3 3 3 <br></code><h4> Sample Output 2 </h4><code>3</code><h4> Explanation </h4><code> 0 1 1 1 0 <br>0 2 <b><b>3</b></b> 2 1 <br>0 2 3 3 2 <br>0 1 2 <b><b>3</b></b> 2 <br>0 1 2 2 2 <br></code><h4> Test Input </h4><code> 22 <br>16 <br>12 14 63 <br>6 18 24 <br>7 9 44 <br>19 19 13 <br>7 21 65 <br>2 4 82 <br>0 0 37 <br>10 10 23 <br>13 17 78 <br>3 15 56 <br>7 9 23 <br>4 13 61 <br>16 11 57 <br>8 1 41 <br>9 20 73 <br>5 12 28</code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "6f81082badfd007354ac6ebb78adaa04bfedf9a1fb9a01909788bad472008ea3",

		},

		/* 15 */
		15 : {

			'questionStatement' : "<p>Metropolis is under attack by General Zod and his army. To handle the crisis, Superman considers Metropolis as a matrix of <b>n</b> rows and <b>m</b> columns, where each cell contains either a <b>0</b> or a <b>1</b> and any cell containing a <b>1</b> is under attack. Two cells are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally. If one or more filled cells are also connected, they form a region.<br>To save Metropolis, Superman decides that he will start by securing the largest area under attack. Help him determine the number of cells in the largest area under attack.<br></p><h4>Input:</h4><p>The first line contains an integer, <b>n</b>, denoting the number of rows in the matrix.<br>The second line contains an integer, <b>m</b>, denoting the number of columns in the matrix.<br>Each line <b>i</b> of the n subsequent lines contains <b>m</b> space separated integers describing the respective values filling each row in the matrix.<br></p><h4>Output:</h4><p>Print the number of cells in the largest region in the given matrix.</p><h4>Constraints:</h4><ul><li>1 " + le + " n, m " + le + " 10</li></ul><h4>Sample Input:</h4><code>4<br>4<br>1 1 0 0<br>0 1 1 0<br>0 0 1 0<br>1 0 0 0<br></code><h4>Sample Output:</h4><code>5</code><h4>Explanation:</h4><p>The diagram below depicts two regions of the matrix; for each region, the component cells forming the region are marked with an X:<br><br>X X 0 0 &nbsp;  &nbsp; 1 1 0 0<br>0 X X 0 &nbsp; &nbsp;  0 1 1 0<br>0 0 X 0 &nbsp;  &nbsp; 0 0 1 0<br>1 0 0 0 &nbsp;  &nbsp; X 0 0 0<br>The first region has five cells and the second region has one cell. Because we want to print the number of cells in the largest region of the matrix, we print <b>5</b>.</p><h4>Test Case:</h4><code>10<br>10<br>1 0 1 0 1 0 1 0 1 0<br>1 1 1 1 0 1 0 0 1 1<br>0 0 1 1 0 0 1 1 0 0<br>1 1 0 0 1 1 0 0 1 1<br>1 0 0 1 1 1 1 1 1 0<br>1 0 0 1 1 0 1 0 1 0<br>1 1 1 1 1 0 0 1 1 0<br>0 1 0 1 0 1 0 1 1 1<br>1 0 1 1 1 0 1 0 1 0<br>1 1 1 0 1 1 0 1 1 1<br></code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "d029fa3a95e174a19934857f535eb9427d967218a36ea014b70ad704bc6c8d1c",

		},

		/* 16 */
		16 : {

			'questionStatement' : "<p> Charles Xavier, Jean Grey and Scott Summers are trying to listen to some music. Jean wants to listen to the songs in the order of the album while Scott wants to listen to the songs in a random order. After some time, Scott manages to convince Jean to listen to the songs his way. Each of the <b> N </b> songs would be chosen randomly and independently of the previous songs. <br>Xavier, meanwhile, wonders how many songs the other two would listen to by the time they play each song at least once.</p><h4> Input Format </h4><p> The first line of the input contains an integer <b> T </b> denoting the number of test cases. The description of <b> T </b> test cases follows. <br>Each test case has a single integer <b> N </b> denoting the number of songs in the album.</p><h4> Input Constraints </h4><ul> <li> 1 " + le + " T " + le + " 100 </li><li> 1 " + le + " N " + le + " 3000 </li></ul><h4> Output Format </h4><p> Output the result for each test case as a space separated entry into an array. Round your answers to <b> 2 </b> decimal places.</p><h4> Sample Input </h4><code> 3 <br>1 2 3</code><h4> Sample Output </h4><code>1.00 3.00 5.50<br></code><h4> Explanation </h4><p> (For 2) After the first song there is a 1/2 chance that the album ends each time a new song is played. Hence the sequence that follows is 2/2 + 3/4 + 4/8...=3</p><h4> Test Input </h4><code> 13 <br>234 561 1024 19 2913 1234 394 786 2316 1345 2978 892 3</code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "219c628e8b4252cfcf26e28731e55471c9d626a2e8cfc21726adf98487e3baaa",

		},

		/* 17 */
		17 : {

			'questionStatement' : "<p>Quicksilver likes to play darts. Today he wants to best his record. For throwing a dart, he gets a score (maybe negative). Score for i-th throw is multiplied by i and  scores are summed. So, for <b>K</b> throws with scores S<sub>1</sub>, S<sub>2</sub>,...,S<sub>k</sub>, total score is 1*S<sub>1</sub> + 2*S<sub>2</sub> +3*S<sub>3</sub> + ... + k*S<sub>k</sub>. Total score is 0 if there are no throws. <br>Quicksilver made <b>N</b> throws and got score A<sub>i</sub> for i-th of them. He wants maximize the total score. To do so, he will cheat and cancel some throws without anyone finding out. <br>He can cancel any number of throws and total score is calculated AS IF THERE WERE ONLY NON CANCELLED SCORES. See examples for clarification. <br>Find Quicksilver's maximum possible score.</p><h4>Input format</h4><p>First line contains <b>N</b> denoting number of throws.<br>Second line contains <b>N</b> space separated integers denoting scores for respective throws.</p><h4>Input Constraints</h4><ul><li>1 " + le + " N " + le + " 10<sup>5</sup></li><li> |S<sub>i</sub>| " + lt + " 10<sup>7</sup></li></ul><h4>Output format</h4><p>Output maximum possible score after choosing throws to cancel.</p><h4>Sample Input 1</h4><code>5<br>-2 -8 0 5 -3 </code><h4>Sample Output </h4><code>13</code><h4>Sample Input 2</h4><code>6<br>-10 20 -30 40 -50 60</code><h4>Sample Output </h4><code>400</code><h4>Explanation</h4></p>In the first example, scores -8 and -3 should be cancelled.So score is 1*-2 + 2*0 + 3*5 = 13  (Notice that the scores -8 and -3 are not considered as part of the scores<br>In second example: -50 is cancelled.Score = 1*-10 + 2*20 + 3*-30 +4*40 +5*60 = 400</p><h4>Test Case</h4><code>10<br>12 -10 5 8 15 -11 -2 31 -25 13</code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "814bb6b8dc12188a44b71e378dc20a4292e01979aa9ab95b09b8a681391dfc9d",

		},

		/* 18 */
		18 : {

			'questionStatement' : "<p> HULK MAD! HULK SEE n SOLDIERS?! IN A LINE?! THEY HAVE DIFFERENT CLASSES! I KILL ALL!! RAAAAAAR-- Okay, ahem, I'm sorry guys. I'm Bruce Banner. I'll tell you what my game is. Since I can't stop myself from killing them all I might as well make this fun. <br>For each guy of class <b> k </b> that I kill, I'll also be killing every guy from the classes <b> k - 1 </b> and <b> k + 1 </b>. And this will be one step for which I get <b> k </b> points. I'll take as many steps as I have to, to get the most points. What's the most points that I can get? I hope I get a-- RAAAR HULK SMASH!!!</p><h4> Input format </h4><p> The first line contains <b> n </b>, the number of soldiers. <br>The next line contains <b> n </b> integers, each integer represents the class he belongs to.</p><h4> Input constraints </h4><ul> <li> 1 " + le + " n " + le + " 10<sup>5</sup> </li><li> 1 " + le + " class<sub>i</sub> " + le + " 10<sup>5</sup> </li></ul><h4> Output format </h4><p> Print a single integer representing the maximum points the Hulk can get.</p><h4> Sample Input </h4><code> 9 <br>1 2 1 3 2 2 2 2 3</code><h4> Sample Output </h4><code> 10</code><h4> Explanation </h4><p> Step 1 : We kill any soldier of class 2. We then also kill all soldiers of class 1 and 3.<br>The line now becomes <code> 2 2 2 2 </code> and we get 2 points <br>In the remaining steps we kill off the class 2 soldiers one-by-one for a sub-total of 8 points. <br>Hence total is 8 + 2=10 points.</p><h4> Test Input </h4><code> 100 <br>6 1 5 7 10 10 2 7 3 7 2 10 7 6 3 5 5 5 3 7 2 4 2 7 7 4 2 8 2 10 4 7 9 1 1 7 9 7 1 10 10 9 5 6 10 1 7 5 8 1 1 5 3 10 2 4 3 5 2 7 4 9 5 10 1 3 7 6 6 9 3 6 6 10 1 10 6 1 10 3 4 1 7 9 2 7 8 9 3 3 2 4 6 6 1 2 9 4 1 2</code>",
			'attempts' : 9,
			'solved' : false,
			'attempted' : false,
			'score' : 80,
			'answer' : "8efbbe9bc19ad2e043c6cdb187c0a0fedde70b6458443ce0b5648ec04ccf4cdf",

		},

		/* 19 */
		19 : {

			'questionStatement' : "<p>Odin gave Loki one last chance to be freed from prison. In order to do that, Loki should ask N Gods about their experiences. <br>The Gods are standing in a line. The coordinate of the <b>i<sup>th</sup></b> God is <b>X<sub>i</sub> (X<sub>i</sub> " + lt + " X<sub>j</sub>, i" + lt + "j)</b>. Loki can visit them all one by one in any order. Each God should be visited ONLY ONCE. Initially, he starts at location of the <b>s<sup>th</sup></b> God and asks him his experience.<br>When Loki wants to change his location, he gives a token to an Asgardian who carries him to his destination. Nobody is visited while the Asgardian takes Loki from one God to another. Moving from <b>i<sup>th</sup></b> God to <b>j<sup>th</sup></b> God, takes <b>|X<sub>i</sub> - X<sub>j</sub>|</b> time. <br>There are two kinds of Asgardians, some are going to the right and accept right tokens. Others go to the left and accept left tokens. There are innumerable Asgardians. Loki has <b>L</b> left tokens and <b>N-1-L</b> right tokens. <br>Loki wants to complete this task as soon as possible. He needs the quickest way to visit all Gods exactly once. </p><h4>Input format</h4><p> First line of input contains three integers separated with a space <b>N, L, S</b>. (Number of Gods, Number of left tokens, Loki’s initial location)<br>Second line contains <b>N</b> spaced integers. The <b>i-th</b> integer is X<sub>i</sub> (coordinate of <b>i-th</b> God).</p><h4>Input Constraints</h4><ul><li>2 " + le + " N " + le + " 10<sup>5</sup></li><li>0 " + le + " L " + lt + " N</li><li>1 " + le + " S " + le + " N</li></ul><h4>Output format</h4><p>Output the minimum time Loki needs to visit all Gods.<br>If Loki cannot visit all Gods with the tokens he has, output <b>-1</b>.</p><h4>Sample Input 1</h4><code>5 2 2 <br>0 10 11 21 22</code><h4>Sample Output </h4><code>33</code><h4>Sample Input 2</h4><code>4 3 1 <br>0 1 2 3</code><h4>Sample Output </h4><code>-1</code><h4>Sample Input 3</h4><code>7 3 2 <br>0 100 200 201 301 303 30</code><h4>Sample Output </h4><code>409</code><h4>Explanation</h4><p>In the first example Loki goes in this order: 2-1-3-5-4 (position of Gods) <br>In the second example, Loki does not enough tokens.<br>In the third example, the order is 2-1-3-4-7-6-5.<br>(There can be multiple orders that give the same minimum time.)</p><h4>Test Case</h4><code>10 7 3<br>11 22 34 51 67 73 96 122 138 151</code>",
			'attempts' : 9,
			'solved' : false,
			'attempted' : false,
			'score' : 80,
			'answer' : "396f804443825586c1283a27fdcadf74abb82008bcd9b260a30912a26563f27d",

		},

		/* 20 */
		20 : {

			'questionStatement' : "<p>Star-Lord and Gamora are travelling through the galaxy. They arrived to a strange planet. The currency system on the planet is really simple: the denominations are precisely all nonnegative powers of an integer <b>N</b> i.e, the coins have the following values: 1, N, N<sup>2</sup>, N<sup>3</sup>, etc.<br>Star-Lord and Gamora need to refuel their craft. The total price of the fuel is <b>X</b>. They would like to pay this amount exactly. They have a sufficient supply of coins with each of the available values.<br><b>W</b> is the number of different ways in which they can pay the required amount. Here, two ways are considered different if and only if there is some value such that in each way we use a different number of coins with this value. As <b>W</b> can be huge, return the value <b>W modulo 1,000,000,007</b>.</p><h4>Input format</h4><p>First line contains an integer <b>N</b><br>Second line is a long <b>X</b> (price of fuel)</p><h4>Input Constraints</h4><ul><li>2" + le + "N" + le + "1000</li><li>1" + le + "X" + le + "10<sup>18</sup></li></ul><h4>Output format</h4><p>Output a value which is <b>W modulo 1000000007</b>, <b>W</b> is number of ways to pay given amount.</p><h4>Sample Input1</h4><code>2<br>4</code><h4>Sample Output </h4><code>4</code><h4>Sample Input2</h4><code>17<br>1</code><h4>Sample Output </h4><code>1</code><h4>Explanation</h4></p>In the first example, the coins have values 1, 2, 4, 8, 16, etc. The amount to be paid is 4. There are four different ways to do that: 4, 2+2, 2+1+1, and 1+1+1+1.<br>In the second example, the price of fuel is 1. There is only one way to pay this amount: by using a single coin with value 1.</p><h4>Test Case</h4><code>841<br>765346961765346961</code>",
			'attempts' : 9,
			'solved' : false,
			'attempted' : false,
			'score' : 80,
			'answer' : "2f0d94c84b522a4eddd142df0ede76773cfc150576e9c910a345e3115c59a293",

		}

	};
// console.log(questions)