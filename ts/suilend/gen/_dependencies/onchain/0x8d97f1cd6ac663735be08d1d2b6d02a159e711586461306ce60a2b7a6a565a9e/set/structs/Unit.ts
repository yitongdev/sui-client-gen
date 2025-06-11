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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isUnit(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::set::Unit`;
}

export interface UnitFields {
  dummyField: ToField<"bool">;
}

export type UnitReified = Reified<Unit, UnitFields>;

/**
 * Move struct: `Unit`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::set`
 */
export class Unit implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::set::Unit`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Unit.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::set::Unit`;
  readonly $typeArgs: [];
  readonly $isPhantom = Unit.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: UnitFields) {
    this.$fullTypeName = composeSuiType(
      Unit.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::set::Unit`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): UnitReified {
    return {
      typeName: Unit.$typeName,
      fullTypeName: composeSuiType(
        Unit.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::set::Unit`,
      typeArgs: [] as [],
      isPhantom: Unit.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Unit.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Unit.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Unit.fromBcs(data),
      bcs: Unit.bcs,
      fromJSONField: (field: any) => Unit.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Unit.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Unit.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Unit.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Unit.fetch(client, id),
      new: (fields: UnitFields) => {
        return new Unit([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Unit.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Unit>> {
    return phantom(Unit.reified());
  }
  static get p() {
    return Unit.phantom();
  }

  static get bcs() {
    return bcs.struct("Unit", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): Unit {
    return Unit.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Unit {
    if (!isUnit(item.type)) {
      throw new Error("not a Unit type");
    }

    return Unit.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): Unit {
    return Unit.fromFields(Unit.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Unit {
    return Unit.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): Unit {
    if (json.$typeName !== Unit.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Unit.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Unit {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUnit(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Unit object`,
      );
    }
    return Unit.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Unit {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isUnit(data.bcs.type)) {
        throw new Error(`object at is not a Unit object`);
      }

      return Unit.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Unit.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Unit> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Unit object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isUnit(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Unit object`);
    }

    return Unit.fromSuiObjectData(res.data);
  }
}
