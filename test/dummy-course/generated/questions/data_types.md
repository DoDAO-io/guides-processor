## Header
This is the course header. This will be added on top of every page. Do to [DoDAO.io](https://www.dodao.io) to know more.

 ---
 
 ## Blockchain Basics
 
 **Which of the following are not valid data types in solidity?**
- [ ]  bool
- [x]  float
- [ ]  address
- [x]  char         
 
**What is the default value of int data type in solidity?**
- [ ]  null
- [x]  0
- [ ]  undefined
- [ ]  1         
 
**Which of the following statements is incorrect regarding data types in solidity?**
- [ ]  The range of uint32 data type is from 0 upto 2**32 -1
- [ ]  Bool data type can only take true and false values.
- [x]  The range of int256 data type is from -2**256+1 to 2**256-1
- [ ]  address data type holds a 20 byte value         
 
**Which of the following statements about address data type in solidity are not correct?**
- [x]  Address payable has a larger size compared to address.
- [x]  Implicit type conversion from address payable to address are not allowed.
- [ ]  If you need a variable of type address and plan to send Ether to it, then declare its type as address payable.
- [x]  Explicit conversion of data type byte 32 to address is allowed.         
 
**Which of the following is not a valid member of type address?**
- [ ]  balance
- [x]  keccak256
- [ ]  codehash
- [ ]  transfer         
 
**Which of the following are true regarding constant and immutable variables in solidity?**
- [x]  For constant variables, the value has to be fixed at compile-time. For immutable, value can be assigned at construction time.
- [ ]  Compared to regular state variables, the gas costs of constant & immutable variables are much higher.
- [x]  Variables declared as immutable are a bit less restricted than those declared as constant.
- [ ]  Immutable variables can be assigned more than once.         
 
**in solidity 0xdCad3a6d3569DF655070DEd06cb7A1b2Ccd1D3AF is an example of-**
- [x]  address
- [ ]  uint
- [ ]  string
- [ ]  array         
 
**which of the following is not a valid array declaration?**
- [ ]  uint arr[10];
- [ ]  int []arr;
- [ ]  uint arr[] = [1,2,3];
- [x]  int [3]arr;         
 
**What will be the value of arr[arr.length-2] after execution of the following code? uint[] arr; arr = [1,2,3]; arr.push(1); arr.push(2); delete arr[1]; arr.pop();**
- [ ]  1
- [ ]  undefined
- [ ]  2
- [x]  3         
 
**Which of the following statements is correct about arrays in solidity ?**
- [ ]  They can hold values of different data types.
- [x]  They can hold primitive data types like uint, bool , address , or string.
- [x]  Array indexing in solidity starts with 0.
- [x]  uint arr[] = new uint[](3) is a valid array declaration.         
 
**Which of the following statements is correct about enums?**
- [x]  They require at least one member, and its default value when declared is the first member.
- [ ]  They cannot have more than 128 members.
- [x]  Their options are represented by subsequent unsigned integer values starting from 0.
- [x]  type(NameOfEnum).min gives the smallest value in the enum.         
 
**Which of the following is not a reference type?**
- [ ]  arrays
- [ ]  mapping
- [ ]  struct
- [x]  enum         
 
**Which of the following is not a valid data location for a reference data type in solidity?**
- [ ]  memory
- [ ]  storage
- [x]  address
- [ ]  calldata         
 
**uint[][5] in solidity is -**
- [ ]  Incorrect way to initialize array
- [ ]  A dynamic array of 5 arrays
- [x]  An array of 5 dynamic arrays
- [ ]  None of the above         
 
**Which of the following is the correct way to compare two strings str1 and str2 in solidity?**
- [ ]  str1 == str2
- [x]  keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2))
- [ ]  string.concat(s1, s2)
- [ ]  All of above         
 
**What does the following syntax do? using SafeMath for uint;**
- [ ]  Imports the SafeMath library
- [ ]  Makes uint variable immutable
- [x]  Links SafeMath to uint types
- [ ]  Sets the SafeMath variable to an uint         
 
**Which of the following is an example of int8?**
- [ ]  Null
- [ ]  -255
- [x]  0
- [ ]  1000         
 
**Which of the following is an example of a byte value?**
- [x]  0x65
- [ ]  True/False
- [ ]  Hello World!
- [ ]  [10,20,30]         
 
**What is wrong with the following code ? // SPDX-License-Identifier: GPL-3.0 pragma solidity >=0.4.16 <0.9.0;
contract C { function f(uint len) public pure { uint[] memory a = new uint[](7); b[6] = 8; b.push(5); } }**
- [ ]  It is not not possible to declare an array with new keyword
- [ ]  b[6]=8 is incorrect assignment for a memory array
- [x]  It is not not possible to use push function with a memory array
- [ ]  The code is correct         
 
**Statement 1- The array literal [-1,1] is invalid. Statement 2- Calling push() member function on an array can be used to append a zero-initialized element at the end of the array. Which of the following options is correct?**
- [ ]  Statement 1 is true.
- [ ]  Statement 2 is true.
- [x]  Both are true.
- [ ]  Neither is true.         
 
**Which of the following statements is correct?**
- [ ]  It is possible for a struct to contain a member of its own type.
- [x]  The dot operator is used to access members of a struct.
- [x]  Struct types can be used inside mappings and arrays and they can themselves contain mappings and arrays.
- [ ]  None of these         
 
**Which of the following statements is correct about mapping data type?**
- [ ]  User-defined or complex types, such as mappings, structs or array types are not allowed as key and "value-types" in a mapping.
- [ ]  Mappings can have any data location.
- [x]  All primitive data types are allowed as key and value pairs.
- [ ]  All of these.         
 
**In the following code snippets where is implicit type conversion possible?**
- [x]  uint8 x; uint16 y; uint32 z=x+y;
- [ ]  uint8 x; uint16 y; uint8 z=x+y;
- [ ]  int8 x; uint16 y; uint32 z=x+y;
- [ ]  Implicit Type conversion is not possible in Solidity.         
 
**What is the correct declaration for a mapping type ?**
- [ ]  mapping(uint -> address) someMapping;
- [ ]  mapping(struct -> address) someMapping;
- [x]  mapping (uint => address) someMapping;
- [ ]  None of the above         
 
**Which of the following statements is correct about fixed point numbers?**
- [x]  They can be declared with Keywords ufixedMxN and fixedMxN.
- [x]  Fixed point numbers are not fully supported by Solidity yet. They can be declared, but cannot be assigned to or from.
- [x]  M represents the number of bits taken by the type and N represents how many decimal points are available.
- [ ]  M must be divisible by 8 and goes from 2 to 128 bits. N must be between 0 and 16, inclusive.         
 
**Comparison operators like <= , >= are not applicable to which of the following value types?**
- [x]  bool
- [ ]  uint
- [ ]  int
- [ ]  address         
 
**Regarding comparison of strings in solidity , based on the statements below , which of the following options is correct? Statement 1 - Compare with the use of hashes. Statement 2 - Check by comparing each character including the length check.**
- [x]  Statement 1 is more gas efficient for longer strings than statement 2.
- [ ]  Statement 2 is more gas efficient for longer strings than statement 1.
- [ ]  Both statements give almost the same gas cost.
- [ ]  There is no gas cost in comparison between strings.         
 
**Which of the following is not a valid address ?**
- [ ]  0x001d3f1ef827552ae1114027bd3ecf1f086ba0f9
- [ ]  0x577a6E294505A797976f218eFd751aB5557E1522
- [ ]  0xc0ffee254729296a45a3885639AC7E10F9d54979
- [x]  0x1011526z3H3fg4445xx556tuoa72288884869aAzl         
 
**Which of the following is true about address in ethereum and solidity?**
- [x]  It corresponds to the last 20 bytes of the Keccak-256 hash of the public key.
- [x]  An address is always prefixed with 0x as it is represented in hexadecimal format (base 16 notation).
- [ ]  Numbers 0-9 and alphabets a-z are all valid characters in an ethereum address.
- [x]  The case sensitivity is used for checksum validation.         
 
**Which of the following statements is correct about send and transfer functions of the address value type?**
- [ ]  Transfer is the low level counterpart of send.
- [ ]  Transfer and send are used to send ether (in units of ETH) to a payable address.
- [x]  In order to make a safe ether transaction it is better to use transfer.
- [ ]  None of these.         
 
**Consider the following statements. Statement 1 - code is used to get the EVM bytecode as a byte memory, codehash is used to get the Keccak-256 hash of that code (as a bytes32). Statement 2 - keccak256(address.code) is cheaper than using address.codehash. Which of the following options is correct considering the code and codehash methods of the address type.**
- [ ]  Both Statement 1 and Statement 2 are correct.
- [x]  Statement 1 is correct but Statement 2 is incorrect.
- [ ]  Statement 2 is correct but Statement 1 is incorrect.
- [ ]  Neither of the statements is correct.         
 
**Which of the following options is correct regarding a user defined value type defined by the syntax ' type C is V ; ' in solidity.**
- [ ]  V is the name of the newly introduced data type.
- [ ]  The type V does not have any operators or bound member functions. In particular, even the operator == is not defined.
- [x]  The function C.wrap is used to convert from the underlying type to the custom type. Similarly, the function C.unwrap is used to convert from the custom type to the underlying type.
- [ ]  None of these.         
 
**In solidity , contract types are -**
- [x]  Similar to classes in object oriented languages.
- [ ]  Similar to functions in object oriented languages.
- [ ]  Reference types.
- [ ]  None of these.         
 
**Which of the following statements are correct regarding variable declaration in solidity?**
- [x]  A variable name should not match with reserved keywords.
- [ ]  Variable names cannot start with underscore.
- [ ]  variables are case insensitive , var123 and VAR123 are same variables.
- [ ]  none of these.         
 
**Which of the following is correct about contract types in solidity?**
- [ ]  Contracts support comparison operators.
- [ ]  The members of contract types are all the functions of the contract including all state variables.
- [ ]  A contract cannot create other contracts using the new keyword.
- [x]  None of these.         
 
**Which among the following is  a valid data storage location for mapping type?**
- [ ]  memory
- [x]  storage
- [ ]  calldata
- [ ]  staticcall         
 
**The declaration below in solidity is an example of which type? function f() public payable returns (bytes4){}**
- [ ]  Contract type
- [x]  Function type
- [ ]  Reference type
- [ ]  Mapping type         
 
**Which access classifier is used with a function type to only access it in the contract it is declared in ?**
- [ ]  public
- [x]  private
- [ ]  internal
- [ ]  external         
 
**In the context of memory arrays which of the following statements are true?**
- [x]  they can be declared with the syntax , uint[] memory a = new uint[](size);
- [ ]  to add an element to the array , push() function is used.
- [ ]  You can acess values in a memory array after execution of the smart contract.
- [x]  They cost less gas compared to storage arrays.         
 
**What will be the value of the following syntax executed in solidity? 255 + (true ? 1 : 0)**
- [ ]  255
- [ ]  256
- [ ]  0
- [x]  the above statement will revert.         
 
**In the following code snippet which line will result in an error- // SPDX-License-Identifier: MIT pragma solidity ^0.8.10; contract C {
//line 1 uint public x = 1;
// line 2 function addToX(uint y) public pure returns (uint) { return x + y; }
// line 3 function add(uint i, uint j) public pure returns (uint) { return i + j; } }**
- [ ]  Line 1
- [x]  Line 2
- [ ]  Line 3
- [ ]  The code snippet will not give any error         
 
**You have a list of teams and their respective scores in a tournament. You are trying to work up some logic in a contract in solidity to efficiently retrieve the scores . Which of the following data types should you use to keep track of the scores?**
- [ ]  enum
- [ ]  Multi dimensional arrays
- [ ]  strings
- [x]  mappings         
 
**On execution of the following code what will be the value of balance? uint8 balance = 255; balance++;**
- [ ]  256
- [x]  0
- [ ]  255
- [ ]  -255         
 
**Which of the following statements are correct in the context of storage and memory data locations ?**
- [x]  Memory in solidity is a temporary storage.
- [x]  Storage is persistent and holds data between function calls.
- [x]  State variables and Local Variables of structs, array are always stored in storage by default. Function arguments are in memory.
- [ ]  None of these.         
 
**Look at the code snippet below, pragma solidity ^0.5.0; contract SolidityTest { uint storedData; constructor() public { storedData = 10; } } What type of variable is storedData declared in the SolidityTest contract?**
- [x]  State Variables
- [ ]  Local Variables
- [ ]  global Variables
- [ ]  None of these         
 
**Which of the following is a valid enum declaration in solidity?**
- [ ]  enum integers {  1 , 2 , 3 , 4 }
- [x]  enum values { one , two , three }
- [ ]  enum myEnums { }
- [x]  enum booleans { True , False }         
 
**Consider the following code snippet , pragma solidity ^0.5.0; contractC { function foo(uint a) pure public returns (uint){ return a << 2; } } What will be the output when a uint value 3 is passed in the function foo of the contract C?**
- [ ]  0
- [ ]  1
- [ ]  8
- [x]  12         
 
**Which of the following are valid literals for solidity data types?**
- [x]  25
- [x]   'foo' 'bar' 
- [x]  hex"001122FF"
- [ ]  None of these         
 
**Variable packing is one way solidity optimizes gas costs in storage state variables . Consider the following two examples of variable declarations. Example 1 -  uint128 a; uint256 b; uint128 c; Example 2 -  uint128 a; uint128 c; uint256 b; Which of the following statements are correct regarding variable packing in the above examples.**
- [ ]  Variables in both examples 1 and 2 are packed.
- [ ]  Variables in example 1 are packed but not in example 2.
- [x]  Variables in example 2 are packed but not in example 1.
- [ ]  Variables in neither examples 1 and 2 are packed.         
 
**Consider the following code snippet , // SPDX-License-Identifier: GPL-3.0 pragma solidity ^0.8.8; contract test { enum ActionChoices { GoLeft, GoRight, GoStraight, SitStill }
function foo() public pure returns (ActionChoices) { return type(ActionChoices).max; } } What will be the output when the function foo is called ?**
- [x]  0:uint8: 3
- [ ]  0:uint8: 0
- [ ]  0:string: “SitStill”
- [ ]  0:string: “GoLeft”         
 
