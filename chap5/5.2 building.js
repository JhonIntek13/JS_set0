function Building() {
  const floors = {};

  function addFloor(floorNumber) {
    if (!floors[floorNumber]) {
      floors[floorNumber] = {
        rooms: {},
        memoizedSearch: memoize(search),
      };
    }
  }

  function addRoom(floorNumber, roomNumber) {
    if (floors[floorNumber]) {
      if (!floors[floorNumber].rooms[roomNumber]) {
        floors[floorNumber].rooms[roomNumber] = {
          equipment: [],
          users: [],
        };
      }
    }
  }

  function addEquipment(floorNumber, roomNumber, equipmentName) {
    if (floors[floorNumber] && floors[floorNumber].rooms[roomNumber]) {
      floors[floorNumber].rooms[roomNumber].equipment.push(equipmentName);
    }
  }

  function addUser(floorNumber, roomNumber, userName) {
    if (floors[floorNumber] && floors[floorNumber].rooms[roomNumber]) {
      floors[floorNumber].rooms[roomNumber].users.push(userName);
    }
  }

  function search(query) {
    for (const floorNumber in floors) {
      const floor = floors[floorNumber];
      for (const roomNumber in floor.rooms) {
        const room = floor.rooms[roomNumber];
        if (room.equipment.includes(query)) {
          return {
            floorNumber,
            roomNumber,
            equipment: query,
            users: room.users.length > 0 ? room.users.join(", ") : "N/A",
          };
        } else if (room.users.includes(query)) {
          return {
            floorNumber,
            roomNumber,
            equipment: room.equipment.length > 0 ? room.equipment.join(", ") : "N/A",
            users: query,
          };
        }
      }
    }
    return null;
  }

  function memoize(func) {
    const cache = {};
    return function (query) {
      if (cache[query]) {
        return cache[query];
      } else {
        const result = func(query);
        cache[query] = result;
        return result;
      }
    };
  }

  return {
    addFloor,
    addRoom,
    addEquipment,
    addUser,
    search,
  };
}

// Usage Example:

const building = Building();

building.addFloor(1);
building.addRoom(1, 101);
building.addEquipment(1, 101, "Computer");
building.addUser(1, 101, "John Doe");

const searchResult = building.search("John Doe");
console.log(searchResult);
