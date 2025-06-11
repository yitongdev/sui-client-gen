import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Option } from "../../../move-stdlib/option/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isReferent(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::borrow::Referent` + "<");
}

export interface ReferentFields<T extends TypeArgument> {
  id: ToField<"address">;
  value: ToField<Option<T>>;
}

export type ReferentReified<T extends TypeArgument> = Reified<
  Referent<T>,
  ReferentFields<T>
>;

/**
 * Move struct: `Referent`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::borrow`
 *
 * @typeParam T - Type parameter 0
 */
export class Referent<T extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::borrow::Referent`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = Referent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::borrow::Referent<${ToTypeStr<T>}>`;
  readonly $typeArgs: [ToTypeStr<T>];
  readonly $isPhantom = Referent.$isPhantom;

  readonly id: ToField<"address">;
  readonly value: ToField<Option<T>>;

  private constructor(typeArgs: [ToTypeStr<T>], fields: ReferentFields<T>) {
    this.$fullTypeName = composeSuiType(
      Referent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::borrow::Referent<${ToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.value = fields.value;
  }

  static reified<T extends Reified<TypeArgument, any>>(
    T: T,
  ): ReferentReified<ToTypeArgument<T>> {
    return {
      typeName: Referent.$typeName,
      fullTypeName: composeSuiType(
        Referent.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::borrow::Referent<${ToTypeStr<ToTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [ToTypeStr<ToTypeArgument<T>>],
      isPhantom: Referent.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        Referent.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Referent.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => Referent.fromBcs(T, data),
      bcs: Referent.bcs(toBcs(T)),
      fromJSONField: (field: any) => Referent.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => Referent.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Referent.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Referent.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        Referent.fetch(client, T, id),
      new: (fields: ReferentFields<ToTypeArgument<T>>) => {
        return new Referent([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Referent.reified;
  }

  static phantom<T extends Reified<TypeArgument, any>>(
    T: T,
  ): PhantomReified<ToTypeStr<Referent<ToTypeArgument<T>>>> {
    return phantom(Referent.reified(T));
  }
  static get p() {
    return Referent.phantom;
  }

  static get bcs() {
    return <T extends BcsType<any>>(T: T) =>
      bcs.struct(`Referent<${T.name}>`, {
        id: bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
        value: Option.bcs(T),
      });
  }

  static fromFields<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    fields: Record<string, any>,
  ): Referent<ToTypeArgument<T>> {
    return Referent.reified(typeArg).new({
      id: decodeFromFields("address", fields.id),
      value: decodeFromFields(Option.reified(typeArg), fields.value),
    });
  }

  static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): Referent<ToTypeArgument<T>> {
    if (!isReferent(item.type)) {
      throw new Error("not a Referent type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Referent.reified(typeArg).new({
      id: decodeFromFieldsWithTypes("address", item.fields.id),
      value: decodeFromFieldsWithTypes(
        Option.reified(typeArg),
        item.fields.value,
      ),
    });
  }

  static fromBcs<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    data: Uint8Array,
  ): Referent<ToTypeArgument<T>> {
    const typeArgs = [typeArg];

    return Referent.fromFields(
      typeArg,
      Referent.bcs(toBcs(typeArgs[0])).parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      value: fieldToJSON<Option<T>>(
        `${Option.$typeName}<${this.$typeArgs[0]}>`,
        this.value,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    field: any,
  ): Referent<ToTypeArgument<T>> {
    return Referent.reified(typeArg).new({
      id: decodeFromJSONField("address", field.id),
      value: decodeFromJSONField(Option.reified(typeArg), field.value),
    });
  }

  static fromJSON<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    json: Record<string, any>,
  ): Referent<ToTypeArgument<T>> {
    if (json.$typeName !== Referent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Referent.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Referent.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    content: SuiParsedData,
  ): Referent<ToTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isReferent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Referent object`,
      );
    }
    return Referent.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    data: SuiObjectData,
  ): Referent<ToTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isReferent(data.bcs.type)) {
        throw new Error(`object at is not a Referent object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
        );
      }

      return Referent.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Referent.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<Referent<ToTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Referent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isReferent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Referent object`);
    }

    return Referent.fromSuiObjectData(typeArg, res.data);
  }
}
