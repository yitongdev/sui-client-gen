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
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { PKG_V2 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isAddedInAnUpgrade(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V2}::other_module::AddedInAnUpgrade`;
}

export interface AddedInAnUpgradeFields {
  dummyField: ToField<"bool">;
}

export type AddedInAnUpgradeReified = Reified<AddedInAnUpgrade, AddedInAnUpgradeFields>;

/**
 * Move struct: `AddedInAnUpgrade`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::other_module`
 */
export class AddedInAnUpgrade implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V2}::other_module::AddedInAnUpgrade`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = AddedInAnUpgrade.$typeName;
  readonly $fullTypeName: `${typeof PKG_V2}::other_module::AddedInAnUpgrade`;
  readonly $typeArgs: [];
  readonly $isPhantom = AddedInAnUpgrade.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: AddedInAnUpgradeFields) {
    this.$fullTypeName = composeSuiType(
      AddedInAnUpgrade.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V2}::other_module::AddedInAnUpgrade`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): AddedInAnUpgradeReified {
    return {
      typeName: AddedInAnUpgrade.$typeName,
      fullTypeName: composeSuiType(
        AddedInAnUpgrade.$typeName,
        ...[],
      ) as `${typeof PKG_V2}::other_module::AddedInAnUpgrade`,
      typeArgs: [] as [],
      isPhantom: AddedInAnUpgrade.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => AddedInAnUpgrade.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => AddedInAnUpgrade.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => AddedInAnUpgrade.fromBcs(data),
      bcs: AddedInAnUpgrade.bcs,
      fromJSONField: (field: any) => AddedInAnUpgrade.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => AddedInAnUpgrade.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => AddedInAnUpgrade.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => AddedInAnUpgrade.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => AddedInAnUpgrade.fetch(client, id),
      new: (fields: AddedInAnUpgradeFields) => {
        return new AddedInAnUpgrade([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return AddedInAnUpgrade.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<AddedInAnUpgrade>> {
    return phantom(AddedInAnUpgrade.reified());
  }
  static get p() {
    return AddedInAnUpgrade.phantom();
  }

  static get bcs() {
    return bcs.struct("AddedInAnUpgrade", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): AddedInAnUpgrade {
    return AddedInAnUpgrade.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): AddedInAnUpgrade {
    if (!isAddedInAnUpgrade(item.type)) {
      throw new Error("not a AddedInAnUpgrade type");
    }

    return AddedInAnUpgrade.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): AddedInAnUpgrade {
    return AddedInAnUpgrade.fromFields(AddedInAnUpgrade.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): AddedInAnUpgrade {
    return AddedInAnUpgrade.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): AddedInAnUpgrade {
    if (json.$typeName !== AddedInAnUpgrade.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return AddedInAnUpgrade.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): AddedInAnUpgrade {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isAddedInAnUpgrade(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a AddedInAnUpgrade object`);
    }
    return AddedInAnUpgrade.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): AddedInAnUpgrade {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isAddedInAnUpgrade(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a AddedInAnUpgrade object`);
      }

      return AddedInAnUpgrade.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return AddedInAnUpgrade.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<AddedInAnUpgrade> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching AddedInAnUpgrade object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isAddedInAnUpgrade(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a AddedInAnUpgrade object`);
    }

    return AddedInAnUpgrade.fromSuiObjectData(res.data);
  }
}
