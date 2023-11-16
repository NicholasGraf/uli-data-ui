import { App } from "../components/App.js";
import { Header } from "../components/Header.js";
import { PageContainer } from "../components/PageContainer.js";
import { ContentLoader } from "../components/ContentLoader.js";
import { AppTable, TableRow, TableColumn } from "../components/AppTable.js";

export const init = async (param) => {
  window.app = param;

  const componentsToLoad = [
    { name: "app-root", class: App },
    { name: "app-header", class: Header },
    { name: "page-container", class: PageContainer },
    { name: "content-loader", class: ContentLoader },
    { name: "app-table", class: AppTable },
    { name: "table-row", class: TableRow },
    { name: "table-column", class: TableColumn },
  ];

  componentsToLoad.forEach((component) => {
    app.components.add(component.name, component.class);
  });

  app.router.navigate(window.location.pathname);

  console.log("Application Object", app);
};
