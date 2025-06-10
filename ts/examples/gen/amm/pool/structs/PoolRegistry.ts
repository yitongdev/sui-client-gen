import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { UID } from "../../../sui/object/structs/index.js";
import { Table } from "../../../sui/table/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { PoolRegistryItem as PoolRegistryItem1 } from "./PoolRegistryItem.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPoolRegistry(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::pool::PoolRegistry`;
}

export interface PoolRegistryFields {
  id: ToField<UID>;
  table: ToField<Table<ToPhantom<PoolRegistryItem1>, "bool">>;
}

export type PoolRegistryReified = Reified<PoolRegistry, PoolRegistryFields>;

/**
 * Move struct: `PoolRegistry`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 */
export class PoolRegistry implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::pool::PoolRegistry`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PoolRegistry.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::pool::PoolRegistry`;
  readonly $typeArgs: [];
  readonly $isPhantom = PoolRegistry.$isPhantom;

  readonly id: ToField<UID>;
  readonly table: ToField<Table<ToPhantom<PoolRegistryItem1>, "bool">>;

  private constructor(typeArgs: [], fields: PoolRegistryFields) {
    this.$fullTypeName = composeSuiType(
      PoolRegistry.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::pool::PoolRegistry`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.table = fields.table;
  }

  static reified(): PoolRegistryReified {
    return {
      typeName: PoolRegistry.$typeName,
      fullTypeName: composeSuiType(
        PoolRegistry.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::pool::PoolRegistry`,
      typeArgs: [] as [],
      isPhantom: PoolRegistry.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        PoolRegistry.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PoolRegistry.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolRegistry.fromBcs(data),
      bcs: PoolRegistry.bcs,
      fromJSONField: (field: any) => PoolRegistry.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PoolRegistry.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PoolRegistry.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PoolRegistry.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        PoolRegistry.fetch(client, id),
      new: (fields: PoolRegistryFields) => {
        return new PoolRegistry([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PoolRegistry.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PoolRegistry>> {
    return phantom(PoolRegistry.reified());
  }
  static get p() {
    return PoolRegistry.phantom();
  }

  static get bcs() {
    return bcs.struct("PoolRegistry", {
      id: UID.bcs,
      table: Table.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): PoolRegistry {
    return PoolRegistry.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      table: decodeFromFields(
        Table.reified(
          reified.phantom(PoolRegistryItem1.reified()),
          reified.phantom("bool"),
        ),
        fields.table,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolRegistry {
    if (!isPoolRegistry(item.type)) {
      throw new Error("not a PoolRegistry type");
    }

    return PoolRegistry.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      table: decodeFromFieldsWithTypes(
        Table.reified(
          reified.phantom(PoolRegistryItem1.reified()),
          reified.phantom("bool"),
        ),
        item.fields.table,
      ),
    });
  }

  static fromBcs(data: Uint8Array): PoolRegistry {
    return PoolRegistry.fromFields(PoolRegistry.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      table: this.table.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): PoolRegistry {
    return PoolRegistry.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      table: decodeFromJSONField(
        Table.reified(
          reified.phantom(PoolRegistryItem1.reified()),
          reified.phantom("bool"),
        ),
        field.table,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): PoolRegistry {
    if (json.$typeName !== PoolRegistry.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PoolRegistry.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PoolRegistry {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPoolRegistry(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PoolRegistry object`,
      );
    }
    return PoolRegistry.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PoolRegistry {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isPoolRegistry(data.bcs.type)
      ) {
        throw new Error(`object at is not a PoolRegistry object`);
      }

      return PoolRegistry.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PoolRegistry.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PoolRegistry> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PoolRegistry object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPoolRegistry(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a PoolRegistry object`);
    }

    return PoolRegistry.fromSuiObjectData(res.data);
  }
}
