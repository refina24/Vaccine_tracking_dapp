// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VaccineExpiry {
    struct Vaccine {
        uint256 expiryDate;
    }

    mapping(string => Vaccine) public vaccines;

    event VaccineAdded(string batchNumber, uint256 expiryDate);
    event VaccineExpired(string batchNumber, uint256 expiryDate);

    function addVaccine(string memory _batchNumber, uint256 _expirationDate) public {
        vaccines[_batchNumber].expiryDate = _expirationDate;
        emit VaccineAdded(_batchNumber, _expirationDate);
    }

    function checkVaccineExpiry(string memory _batchNumber, uint256 _date) public view returns (bool) {
        return vaccines[_batchNumber].expiryDate < _date;
    }

    function updateVaccineExpiryStatus(string memory _batchNumber, uint256 _date) public {
        if (vaccines[_batchNumber].expiryDate < _date) {
            emit VaccineExpired(_batchNumber, _date);
        }
    }
}