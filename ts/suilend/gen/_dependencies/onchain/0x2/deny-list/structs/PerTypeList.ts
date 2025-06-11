import * as reified from "../../../../../_framework/reified.js";
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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { PKG_V35 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { Table } from "../../table/structs/index.js";
import { VecSet } from "../../vec-set/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPerTypeList(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::deny_list::PerTypeList`;
}

export interface PerTypeListFields {
  id: ToField<UID>;
  deniedCount: ToField<Table<"address", "u64">>;
  deniedAddresses: ToField<
    Table<ToPhantom<Vector<"u8">>, ToPhantom<VecSet<"address">>>
  >;
}

export type PerTypeListReified = Reified<PerTypeList, PerTypeListFields>;

/**
 * Move struct: `PerTypeList`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 */
export class PerTypeList implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::deny_list::PerTypeList`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PerTypeList.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::deny_list::PerTypeList`;
  readonly $typeArgs: [];
  readonly $isPhantom = PerTypeList.$isPhantom;

  readonly id: ToField<UID>;
  readonly deniedCount: ToField<Table<"address", "u64">>;
  readonly deniedAddresses: ToField<
    Table<ToPhantom<Vector<"u8">>, ToPhantom<VecSet<"address">>>
  >;

  private constructor(typeArgs: [], fields: PerTypeListFields) {
    this.$fullTypeName = composeSuiType(
      PerTypeList.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::deny_list::PerTypeList`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.deniedCount = fields.deniedCount;
    this.deniedAddresses = fields.deniedAddresses;
  }

  static reified(): PerTypeListReified {
    return {
      typeName: PerTypeList.$typeName,
      fullTypeName: composeSuiType(
        PerTypeList.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::deny_list::PerTypeList`,
      typeArgs: [] as [],
      isPhantom: PerTypeList.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        PerTypeList.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PerTypeList.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PerTypeList.fromBcs(data),
      bcs: PerTypeList.bcs,
      fromJSONField: (field: any) => PerTypeList.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PerTypeList.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PerTypeList.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PerTypeList.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        PerTypeList.fetch(client, id),
      new: (fields: PerTypeListFields) => {
        return new PerTypeList([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PerTypeList.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PerTypeList>> {
    return phantom(PerTypeList.reified());
  }
  static get p() {
    return PerTypeList.phantom();
  }

  static get bcs() {
    return bcs.struct("PerTypeList", {
      id: UID.bcs,
      denied_count: Table.bcs,
      denied_addresses: Table.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): PerTypeList {
    return PerTypeList.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      deniedCount: decodeFromFields(
        Table.reified(reified.phantom("address"), reified.phantom("u64")),
        fields.denied_count,
      ),
      deniedAddresses: decodeFromFields(
        Table.reified(
          reified.phantom(reified.vector("u8")),
          reified.phantom(VecSet.reified("address")),
        ),
        fields.denied_addresses,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PerTypeList {
    if (!isPerTypeList(item.type)) {
      throw new Error("not a PerTypeList type");
    }

    return PerTypeList.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      deniedCount: decodeFromFieldsWithTypes(
        Table.reified(reified.phantom("address"), reified.phantom("u64")),
        item.fields.denied_count,
      ),
      deniedAddresses: decodeFromFieldsWithTypes(
        Table.reified(
          reified.phantom(reified.vector("u8")),
          reified.phantom(VecSet.reified("address")),
        ),
        item.fields.denied_addresses,
      ),
    });
  }

  static fromBcs(data: Uint8Array): PerTypeList {
    return PerTypeList.fromFields(PerTypeList.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      deniedCount: this.deniedCount.toJSONField(),
      deniedAddresses: this.deniedAddresses.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): PerTypeList {
    return PerTypeList.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      deniedCount: decodeFromJSONField(
        Table.reified(reified.phantom("address"), reified.phantom("u64")),
        field.deniedCount,
      ),
      deniedAddresses: decodeFromJSONField(
        Table.reified(
          reified.phantom(reified.vector("u8")),
          reified.phantom(VecSet.reified("address")),
        ),
        field.deniedAddresses,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): PerTypeList {
    if (json.$typeName !== PerTypeList.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PerTypeList.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PerTypeList {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPerTypeList(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PerTypeList object`,
      );
    }
    return PerTypeList.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PerTypeList {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPerTypeList(data.bcs.type)) {
        throw new Error(`object at is not a PerTypeList object`);
      }

      return PerTypeList.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PerTypeList.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PerTypeList> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PerTypeList object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPerTypeList(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a PerTypeList object`);
    }

    return PerTypeList.fromSuiObjectData(res.data);
  }
}
