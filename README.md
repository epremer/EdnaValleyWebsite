<h2>NOTE TO CDK GLOBAL:</h2>
-------------------------------------------------------------------
Your file upload system would allow neither .zip nor bash files, so if
you wish to run the scripts, the scripts are available on my github
repo https://github.com/epremer/CS344.git
-------------------------------------------------------------------


Matrix Implementation
-------------------------------------------------------------------
This bash script computes matrix operations. The purpose
is to get me familiar with the Unix shell, shell programming, Unix
utilities, standard input, output, and error, pipelines, process
ids, exit values, and signals (at a basic level).

-------------------------------------------------------------------

Assignment Specifications
-------------------------------------------------------------------
Write a bash shell script that calculates basic matrix operations
using input from either a file or stdin.

Your program must perform the following operations: dims, transpose,
mean, add, and multiply. Usage is as follows:

matrix dims [MATRIX]  
matrix transpose [MATRIX]  
matrix mean [MATRIX]  
matrix add MATRIX_LEFT MATRIX_RIGHT  
matrix multiply MATRIX_LEFT MATRIX_RIGHT  
<pre>
Sample Input / Output:  
$ cat m1  
1	2	3	4
5	6	7	8  
$ cat m2  
1	2  
3	4  
5	6  
7	8  
$ ./matrix dims m1  
2 4  
$ cat m2 | ./matrix dims  
4 2  
$ ./matrix add m1 m1  
2	4	6	8  
10	12	14	16  
$ ./matrix add m2 m2  
2	4  
6	8  
10	12  
14	16  
$ ./matrix mean m1  
3	4	5	6  
$ ./matrix transpose m1  
1	5  
2	6  
3	7  
4	8  
$ ./matrix multiply m1 m2  
50	60  
114	140  
</pre>
-------------------------------------------------------------------


Motivation
-------------------------------------------------------------------
This program satisfies Assignment 1 for OSU's CS344 Operating
Systems I class, Fall 2018, due 8 October 2018.
-------------------------------------------------------------------


Contents included in this release
-------------------------------------------------------------------
<pre>(Content included)  
	README.txt  
	matrix		-- a bash script to manipulate matrices
	p1gradingscript	-- a bash script to test matrix script
	m1		-- a sample matrix for use in individual
				function testing (2x4 - various ints)
	m2		-- a sample matrix for use in individual
				function testing (4x2 - various ints)
	m3		-- a sample matrix for use in individual
				function testing (2x4 - all zeros)
	m4		-- a sample matrix for use in individual
				function testing (4x2 - all zeros)
  	m5		-- a sample matrix for use in individual
				function testing (3x3 - identity matrix)</pre>
-------------------------------------------------------------------


Requirements To Run Scripts
-------------------------------------------------------------------
<h4>bash on Linux needed. Originally developed for CentOS.</h4>
<h4>Not recommended to actually run without the above requirements.</h4>
-------------------------------------------------------------------


Usage Notes for Command Line
-------------------------------------------------------------------
<pre>Compile each program using command line with:  
	no separate compiling step  

Run the bash grading script with:  
	./p1gradingscript matrix  

Note re: running grading script:  
You may need to employ patience for the final set of tests, as
	they do take a couple minutes (the grading script uses matrices
	up to 50x50).

To run only one function at a time use one of the following, where
	[MATRIX] is your user-input matrix, tab-delimited:  
		matrix dims [MATRIX]  
		matrix transpose [MATRIX]  
		matrix mean [MATRIX]  
		matrix add MATRIX_LEFT MATRIX_RIGHT  
		matrix multiply MATRIX_LEFT MATRIX_RIGHT  
</pre>
-------------------------------------------------------------------


Tech/framework used
-------------------------------------------------------------------
Built with  
- Vim in Mac Terminal for bash on Linux.
- Originally developed for CentOS.
-------------------------------------------------------------------


Authors
-------------------------------------------------------------------
- matrix script: Elizabeth Premer  
- p1gradingscript: Various developers and TAs from OSU's CS344 class
	including:  
		- Erich Kramer  
		- Christopher Pomeroy  
		- Benjamin Brewster  
		- Ryan Gambord  
-------------------------------------------------------------------


License
-------------------------------------------------------------------
<h4>This project is not licensed under any license and was developed for educational use only.</h4>
-------------------------------------------------------------------


Acknowledgements
-------------------------------------------------------------------

-------------------------------------------------------------------
