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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isAddressKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::deny_list::AddressKey`;
}

export interface AddressKeyFields {
  pos0: ToField<"address">;
}

export type AddressKeyReified = Reified<AddressKey, AddressKeyFields>;

/**
 * Move struct: `AddressKey`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 */
export class AddressKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::deny_list::AddressKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = AddressKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::deny_list::AddressKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = AddressKey.$isPhantom;

  readonly pos0: ToField<"address">;

  private constructor(typeArgs: [], fields: AddressKeyFields) {
    this.$fullTypeName = composeSuiType(
      AddressKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::deny_list::AddressKey`;
    this.$typeArgs = typeArgs;

    this.pos0 = fields.pos0;
  }

  static reified(): AddressKeyReified {
    return {
      typeName: AddressKey.$typeName,
      fullTypeName: composeSuiType(
        AddressKey.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::deny_list::AddressKey`,
      typeArgs: [] as [],
      isPhantom: AddressKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => AddressKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => AddressKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => AddressKey.fromBcs(data),
      bcs: AddressKey.bcs,
      fromJSONField: (field: any) => AddressKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => AddressKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => AddressKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => AddressKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => AddressKey.fetch(client, id),
      new: (fields: AddressKeyFields) => {
        return new AddressKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return AddressKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<AddressKey>> {
    return phantom(AddressKey.reified());
  }
  static get p() {
    return AddressKey.phantom();
  }

  static get bcs() {
    return bcs.struct("AddressKey", {
      pos0: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
    });
  }

  static fromFields(fields: Record<string, any>): AddressKey {
    return AddressKey.reified().new({ pos0: decodeFromFields("address", fields.pos0) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): AddressKey {
    if (!isAddressKey(item.type)) {
      throw new Error("not a AddressKey type");
    }

    return AddressKey.reified().new({
      pos0: decodeFromFieldsWithTypes("address", item.fields.pos0),
    });
  }

  static fromBcs(data: Uint8Array): AddressKey {
    return AddressKey.fromFields(AddressKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      pos0: this.pos0,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): AddressKey {
    return AddressKey.reified().new({ pos0: decodeFromJSONField("address", field.pos0) });
  }

  static fromJSON(json: Record<string, any>): AddressKey {
    if (json.$typeName !== AddressKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return AddressKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): AddressKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isAddressKey(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a AddressKey object`);
    }
    return AddressKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): AddressKey {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isAddressKey(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a AddressKey object`);
      }

      return AddressKey.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return AddressKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<AddressKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching AddressKey object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isAddressKey(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a AddressKey object`);
    }

    return AddressKey.fromSuiObjectData(res.data);
  }
}
