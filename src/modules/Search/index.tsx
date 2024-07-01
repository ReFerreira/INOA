import { ChangeEvent, useState } from "react";
import { Container, Title, FormContainer, SelectedContainer, SelectedList } from "./styles";
import { MdDeleteForever } from "@react-icons/all-files/md/MdDeleteForever";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [value, setValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm: string) => {
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm !== "" && !selectedItems.includes(trimmedSearchTerm)) {
      setSelectedItems([...selectedItems, trimmedSearchTerm]);
    }
    setValue(""); 
  };

  const onDeleteItem = (item: string) => {
    const filteredItems = selectedItems.filter(
      (selectedItem) => selectedItem !== item
    );
    setSelectedItems(filteredItems);
  };

  return (
    <Container>
      <Title>Search</Title>
      <FormContainer>
        <Input value={value} onChange={onChange} />
        <Button onClick={() => onSearch(value)}>Selecionar</Button>
      </FormContainer>
      <Dropdown value={value} onSearch={onSearch} />
      {selectedItems && (
        <SelectedContainer >
          {selectedItems.map((item) => (
            <SelectedList key={item}>
              <span>{item}</span>
              <MdDeleteForever size={20} onClick={() => onDeleteItem(item)} />
            </SelectedList>
          ))}
        </SelectedContainer>
      )}
    </Container>
  );
};

export default App;
