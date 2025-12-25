import { createItem, getAllItems } from '../../services/itemMaster.service';
import { Button } from '../ui/button';

// Add a test item
const testItem = async () => {
  const itemId = await createItem({
    item_code: 'MILK001',
    item_name: 'Whole Milk',
    item_category: 'Dairy',
    item_default_shelf_life: 7
  });
  console.log('Created item:', itemId);

  const items = await getAllItems();
  console.log('All items:', items);
};
const TestButton = () => {
  const handleClick = () => {
    testItem();
  };

  return (
    <Button variant="primary" onClick={handleClick}>
      Test
    </Button>
  );
};
