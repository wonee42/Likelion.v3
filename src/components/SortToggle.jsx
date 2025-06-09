import styled from "styled-components";

export default function SortToggle({ sortOrder, setSortOrder }) {
  return (
    <SortBar>
      <SortItem
        $active={sortOrder === "low"}
        onClick={() => setSortOrder("low")}
      >
        낮은가격
      </SortItem>
      <SortItem
        $active={sortOrder === "high"}
        onClick={() => setSortOrder("high")}
      >
        높은가격
      </SortItem>
    </SortBar>
  );
}

const SortBar = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  font-size: 1rem;
  font-weight: 500;
`;

const SortItem = styled.span`
  cursor: pointer;
  border-bottom: ${({ $active }) => ($active ? "2px solid #222" : "none")};
  color: ${({ $active }) => ($active ? "#222" : "#888")};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};

  &:hover {
    color: #222;
  }
`;