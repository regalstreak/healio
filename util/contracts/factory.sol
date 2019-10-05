pragma solidity 0.5.8;
pragma experimental ABIEncoderV2;
//simple safemath library for mathematical operation for uint256 and int256
library SafeMath {
  /**
  * @dev Multiplies two numbers, reverts on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    // Gas optimization: this ix`s cheaper than requiring 'a' not being zero, but the
    // benefit is lost if 'b' is also tested.
    // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }
  /**
  * @dev Integer division of two numbers truncating the quotient, reverts on division by zero.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a / b;
    return c;
  }
  /**
  * @dev Subtracts two numbers, reverts on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }
 
  /**
  * @dev Adds two numbers, reverts on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
  /**
  * @dev Divides two numbers and returns the remainder (unsigned integer modulo),
  * reverts when dividing by zero.
  */
  function ceil(uint256 a, uint256 m) internal pure returns (uint256) {
    uint256 c = add(a,m);
    uint256 d = sub(c,1);
    return mul(div(d,m),m);
  }
}

contract Factory{
    mapping(address=>Research) _researchMapping;
    mapping(address=>Buyer) _buyerMapping;
    //creates a new researcher contract and return its contract address
    function newResearch (string memory name,string memory research_name,string memory field) public payable returns(Research){
        Research newResearch= new Research(name,research_name,field,msg.sender);
        _researchMapping[msg.sender]=newResearch;
        return newResearch; 
    }
    function newBuyer(string memory name) public payable returns(Buyer){
        Buyer newBuyer= new Buyer(name,msg.sender);
        _buyerMapping[msg.sender]=newBuyer;
        return newBuyer;     
    }
        
}
contract Research {
    using SafeMath for uint256;
    struct data{
        address payable patient_address_;
        string patient_data_;
    }
    address[] _buyerAddress;
    data[] _patientData;
    string _name;
    string _researcherName;
    string _field;
    uint _totalFunds;
    address payable _owner;
    int _totalPatients;
    uint _costPerData;
    modifier onlyOwner {
        require(msg.sender == _owner);
        _;
    }
    // constructor to initialize contract
    constructor(string memory name,string memory researcherName,string memory field,address payable owner_address) public payable{
        _name=name;
        _researcherName=researcherName;
        _field=field;
        _owner=owner_address;
        _totalPatients=0;
    }
    
    // returns cost price per data which is defined with the constructor
    function getCostPerData()public returns(uint){
        return _costPerData;
    }
    //used to enter data of users for the research
    function enterData(address payable patient_address,string memory patient_data)public returns(bool){
        data memory newData=data({
            patient_address_:patient_address,
            patient_data_:patient_data
        });
        _patientData.push(newData);
        _totalPatients++;
    }
    //returns basic research informationo
    function getResearchInfo() public view onlyOwner returns(string memory,string memory,string memory,uint,int){
        return( 
            _name,
            _researcherName,
            _field,
            _totalFunds,
            _totalPatients);
    }
    //returns information about specific user/patient
    function getPatientInfo(uint index) public view onlyOwner returns(data memory){
        return(_patientData[index]);
    }
    //returns balance left in the research fund
    function getFund() public view onlyOwner returns(uint){
        return address(this).balance;
    }
    
    //returns something shit
    function getAddress()public returns(address){
        // return this.address;
    }
    //splits income among patients and the researcher
    function splitIncome(address buyerAddress) public payable returns(address){
        uint _sendFund=_totalFunds/(_patientData.length*2);
        // address(this).transfer(_owner,)
        for (uint i=0; i<_patientData.length; i++) {
            address(_patientData[i].patient_address_).transfer(_sendFund);
        }
        address(_owner).transfer(address(this).balance);
        _buyerAddress.push(buyerAddress);
    }
    
    //returns complete data about the patients who are giving data for rresearch
    function getCompleteData()public returns(data[] memory){
        return _patientData;
    }
    
    function getBuyers() public returns(address[] memory){
        return _buyerAddress;
    }
}

contract Buyer{
    using SafeMath for uint256;
    using SafeMath for int256;
    address _owner;
    string _name;
    
    //constructor for initializing the Buyer
    constructor(string  memory name,address ownerAddress) public {
        _owner=ownerAddress;
        _name=name;
    }
    
    
    //returns data and transfers eth to the researcher also callls split func in the researcher contract
    function getData(address payable research) private returns(Research.data[] memory){
        Research.data[] memory totaldata=Research(research).getCompleteData();
        uint total_cost=Research(research).getCostPerData()*totaldata.length;
        address(research).transfer(total_cost);
        Research(research).splitIncome(msg.sender);
        return (totaldata);
    }
    
    function getBalance() private returns(uint){
        return address(this).balance;
    }
}

contract User{
    address[] _buyers;
    address _owner;
    function addBuyer(address buyerAddress)public {
        _buyers.push(buyerAddress);
    }
}