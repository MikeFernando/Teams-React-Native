import React from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { ListEmpyt } from "@components/ListEmpyt";
import { GroupCard } from "@components/GroupCard";
import { TitleSubtitle } from "@components/TitleSubtitle.tsx";

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = React.useState<string[]>([]);

  return (
    <Container>
      <Header />
      <TitleSubtitle title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpyt message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
