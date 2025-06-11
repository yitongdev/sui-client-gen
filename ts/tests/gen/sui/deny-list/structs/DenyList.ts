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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { Bag } from "../../bag/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isDenyList(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::deny_list::DenyList`;
}

export interface DenyListFields {
  id: ToField<UID>;
  lists: ToField<Bag>;
}

export type DenyListReified = Reified<DenyList, DenyListFields>;

/**
 * Move struct: `DenyList`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 */
export class DenyList implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::deny_list::DenyList`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = DenyList.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::deny_list::DenyList`;
  readonly $typeArgs: [];
  readonly $isPhantom = DenyList.$isPhantom;

  readonly id: ToField<UID>;
  readonly lists: ToField<Bag>;

  private constructor(typeArgs: [], fields: DenyListFields) {
    this.$fullTypeName = composeSuiType(
      DenyList.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::deny_list::DenyList`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.lists = fields.lists;
  }

  static reified(): DenyListReified {
    return {
      typeName: DenyList.$typeName,
      fullTypeName: composeSuiType(
        DenyList.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::deny_list::DenyList`,
      typeArgs: [] as [],
      isPhantom: DenyList.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => DenyList.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        DenyList.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => DenyList.fromBcs(data),
      bcs: DenyList.bcs,
      fromJSONField: (field: any) => DenyList.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => DenyList.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        DenyList.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        DenyList.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        DenyList.fetch(client, id),
      new: (fields: DenyListFields) => {
        return new DenyList([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DenyList.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<DenyList>> {
    return phantom(DenyList.reified());
  }
  static get p() {
    return DenyList.phantom();
  }

  static get bcs() {
    return bcs.struct("DenyList", {
      id: UID.bcs,
      lists: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): DenyList {
    return DenyList.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      lists: decodeFromFields(Bag.reified(), fields.lists),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): DenyList {
    if (!isDenyList(item.type)) {
      throw new Error("not a DenyList type");
    }

    return DenyList.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      lists: decodeFromFieldsWithTypes(Bag.reified(), item.fields.lists),
    });
  }

  static fromBcs(data: Uint8Array): DenyList {
    return DenyList.fromFields(DenyList.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      lists: this.lists.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): DenyList {
    return DenyList.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      lists: decodeFromJSONField(Bag.reified(), field.lists),
    });
  }

  static fromJSON(json: Record<string, any>): DenyList {
    if (json.$typeName !== DenyList.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return DenyList.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): DenyList {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDenyList(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a DenyList object`,
      );
    }
    return DenyList.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): DenyList {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDenyList(data.bcs.type)) {
        throw new Error(`object at is not a DenyList object`);
      }

      return DenyList.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DenyList.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<DenyList> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching DenyList object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isDenyList(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a DenyList object`);
    }

    return DenyList.fromSuiObjectData(res.data);
  }
}
