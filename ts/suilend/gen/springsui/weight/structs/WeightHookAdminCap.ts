import { UID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isWeightHookAdminCap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::weight::WeightHookAdminCap` + "<");
}

export interface WeightHookAdminCapFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
}

export type WeightHookAdminCapReified<T0 extends PhantomTypeArgument> = Reified<
  WeightHookAdminCap<T0>,
  WeightHookAdminCapFields<T0>
>;

/**
 * Move struct: `WeightHookAdminCap`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class WeightHookAdminCap<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::weight::WeightHookAdminCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = WeightHookAdminCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::weight::WeightHookAdminCap<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = WeightHookAdminCap.$isPhantom;

  readonly id: ToField<UID>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: WeightHookAdminCapFields<T0>) {
    this.$fullTypeName = composeSuiType(
      WeightHookAdminCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::weight::WeightHookAdminCap<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): WeightHookAdminCapReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: WeightHookAdminCap.$typeName,
      fullTypeName: composeSuiType(
        WeightHookAdminCap.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::weight::WeightHookAdminCap<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: WeightHookAdminCap.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => WeightHookAdminCap.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WeightHookAdminCap.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => WeightHookAdminCap.fromBcs(T0, data),
      bcs: WeightHookAdminCap.bcs,
      fromJSONField: (field: any) => WeightHookAdminCap.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => WeightHookAdminCap.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WeightHookAdminCap.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WeightHookAdminCap.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => WeightHookAdminCap.fetch(client, T0, id),
      new: (fields: WeightHookAdminCapFields<ToPhantomTypeArgument<T0>>) => {
        return new WeightHookAdminCap([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WeightHookAdminCap.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<WeightHookAdminCap<ToPhantomTypeArgument<T0>>>> {
    return phantom(WeightHookAdminCap.reified(T0));
  }
  static get p() {
    return WeightHookAdminCap.phantom;
  }

  static get bcs() {
    return bcs.struct("WeightHookAdminCap", {
      id: UID.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): WeightHookAdminCap<ToPhantomTypeArgument<T0>> {
    return WeightHookAdminCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): WeightHookAdminCap<ToPhantomTypeArgument<T0>> {
    if (!isWeightHookAdminCap(item.type)) {
      throw new Error("not a WeightHookAdminCap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return WeightHookAdminCap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): WeightHookAdminCap<ToPhantomTypeArgument<T0>> {
    return WeightHookAdminCap.fromFields(typeArg, WeightHookAdminCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): WeightHookAdminCap<ToPhantomTypeArgument<T0>> {
    return WeightHookAdminCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): WeightHookAdminCap<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== WeightHookAdminCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(WeightHookAdminCap.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return WeightHookAdminCap.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): WeightHookAdminCap<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWeightHookAdminCap(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a WeightHookAdminCap object`);
    }
    return WeightHookAdminCap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): WeightHookAdminCap<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isWeightHookAdminCap(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a WeightHookAdminCap object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return WeightHookAdminCap.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WeightHookAdminCap.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<WeightHookAdminCap<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching WeightHookAdminCap object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isWeightHookAdminCap(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a WeightHookAdminCap object`);
    }

    return WeightHookAdminCap.fromSuiObjectData(typeArg, res.data);
  }
}
