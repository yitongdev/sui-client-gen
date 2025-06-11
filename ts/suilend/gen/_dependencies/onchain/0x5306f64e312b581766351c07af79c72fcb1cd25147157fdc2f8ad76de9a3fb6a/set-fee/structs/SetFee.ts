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

export function isSetFee(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::set_fee::SetFee`;
}

export interface SetFeeFields {
  amount: ToField<"u64">;
}

export type SetFeeReified = Reified<SetFee, SetFeeFields>;

/**
 * Move struct: `SetFee`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::set_fee`
 */
export class SetFee implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::set_fee::SetFee`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = SetFee.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::set_fee::SetFee`;
  readonly $typeArgs: [];
  readonly $isPhantom = SetFee.$isPhantom;

  readonly amount: ToField<"u64">;

  private constructor(typeArgs: [], fields: SetFeeFields) {
    this.$fullTypeName = composeSuiType(
      SetFee.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::set_fee::SetFee`;
    this.$typeArgs = typeArgs;

    this.amount = fields.amount;
  }

  static reified(): SetFeeReified {
    return {
      typeName: SetFee.$typeName,
      fullTypeName: composeSuiType(
        SetFee.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::set_fee::SetFee`,
      typeArgs: [] as [],
      isPhantom: SetFee.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => SetFee.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        SetFee.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => SetFee.fromBcs(data),
      bcs: SetFee.bcs,
      fromJSONField: (field: any) => SetFee.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => SetFee.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        SetFee.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        SetFee.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => SetFee.fetch(client, id),
      new: (fields: SetFeeFields) => {
        return new SetFee([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return SetFee.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<SetFee>> {
    return phantom(SetFee.reified());
  }
  static get p() {
    return SetFee.phantom();
  }

  static get bcs() {
    return bcs.struct("SetFee", {
      amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): SetFee {
    return SetFee.reified().new({
      amount: decodeFromFields("u64", fields.amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): SetFee {
    if (!isSetFee(item.type)) {
      throw new Error("not a SetFee type");
    }

    return SetFee.reified().new({
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
    });
  }

  static fromBcs(data: Uint8Array): SetFee {
    return SetFee.fromFields(SetFee.bcs.parse(data));
  }

  toJSONField() {
    return {
      amount: this.amount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): SetFee {
    return SetFee.reified().new({
      amount: decodeFromJSONField("u64", field.amount),
    });
  }

  static fromJSON(json: Record<string, any>): SetFee {
    if (json.$typeName !== SetFee.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return SetFee.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): SetFee {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSetFee(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a SetFee object`,
      );
    }
    return SetFee.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): SetFee {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isSetFee(data.bcs.type)) {
        throw new Error(`object at is not a SetFee object`);
      }

      return SetFee.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return SetFee.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<SetFee> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching SetFee object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isSetFee(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a SetFee object`);
    }

    return SetFee.fromSuiObjectData(res.data);
  }
}
