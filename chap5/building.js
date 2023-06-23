function Building() {
  const floors = {};

  function addFloor(floorNumber) {
    if (!floors[floorNumber]) {
      floors[floorNumber] = {
        rooms: {},
        memoizedSearch: memoize(search),
      };
      console.log(`Floor ${floorNumber} added successfully!`);
    } else {
      console.log(`Floor ${floorNumber} already exists!`);
    }
  }

  function addRoom(floorNumber, roomNumber) {
    if (floors[floorNumber]) {
      if (!floors[floorNumber].rooms[roomNumber]) {
        floors[floorNumber].rooms[roomNumber] = {
          equipment: [],
          users: [],
        };
        console.log(`Room ${roomNumber} on Floor ${floorNumber} added successfully!`);
      } else {
        console.log(`Room ${roomNumber} on Floor ${floorNumber} already exists!`);
      }
    } else {
      console.log(`Floor ${floorNumber} does not exist!`);
    }
  }

  function addEquipment(floorNumber, roomNumber, equipmentName) {
    if (floors[floorNumber] && floors[floorNumber].rooms[roomNumber]) {
      floors[floorNumber].rooms[roomNumber].equipment.push(equipmentName);
      console.log(`Equipment "${equipmentName}" added successfully to Room ${roomNumber} on Floor ${floorNumber}!`);
    } else {
      console.log(`Floor ${floorNumber} or Room ${roomNumber} does not exist!`);
    }
  }

  function addUser(floorNumber, roomNumber, userName) {
    if (floors[floorNumber] && floors[floorNumber].rooms[roomNumber]) {
      floors[floorNumber].rooms[roomNumber].users.push(userName);
      console.log(`User "${userName}" added successfully to Room ${roomNumber} on Floor ${floorNumber}!`);
    } else {
      console.log(`Floor ${floorNumber} or Room ${roomNumber} does not exist!`);
    }
  }

  function search(floorNumber, roomNumber, query) {
    if (floors[floorNumber] && floors[floorNumber].rooms[roomNumber]) {
      const room = floors[floorNumber].rooms[roomNumber];
      const foundEquipment = room.equipment.filter((equipment) => equipment.includes(query));
      const foundUsers = room.users.filter((user) => user.includes(query));
      return {
        floorNumber,
        roomNumber,
        equipment: foundEquipment,
        users: foundUsers,
      };
    } else {
      return null;
    }
  }

  function memoize(func) {
    const cache = {};
    return function (floorNumber, roomNumber, query) {
      const cacheKey = `${floorNumber}-${roomNumber}-${query}`;
      if (cache[cacheKey]) {
        console.log("Retrieving from cache...");
        return cache[cacheKey];
      } else {
        const result = func(floorNumber, roomNumber, query);
        cache[cacheKey] = result;
        return result;
      }
    };
  }

  return {
    addFloor,
    addRoom,
    addEquipment,
    addUser,
    search: function (floorNumber, roomNumber, query) {
      const result = floors[floorNumber]?.memoizedSearch(floorNumber, roomNumber, query);
      if (result) {
        console.log("Search successful!");
        return result;
      } else {
        console.log("Search failed! Invalid floor or room.");
        return null;
      }
    },
  };
}

// Usage Example:

const building
